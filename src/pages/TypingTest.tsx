import { useState, useEffect, useRef } from 'react';
import { useStorage } from '../hooks/useStorage';
import { studyTopics } from '../data/topics';
import { Keyboard } from 'lucide-react';

export function TypingTest() {
  const { saveResult } = useStorage();
  const [selectedTime, setSelectedTime] = useState<number>(4); // 4 minutes by default
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [text, setText] = useState('');
  const [input, setInput] = useState('');

  const [accumulatedCorrect, setAccumulatedCorrect] = useState(0);
  const [accumulatedAttempted, setAccumulatedAttempted] = useState(0);

  // Derive pool of texts
  const textPool = studyTopics.flatMap(t => t.content).filter(c => c.split(' ').length > 20 && c.toUpperCase() !== c);

  
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [correctWords, setCorrectWords] = useState(0);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setText(textPool[Math.floor(Math.random() * textPool.length)]);
  }, []);

  useEffect(() => {
    let interval: number;
    if (isActive && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      endTest();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  // Auto-scroll effect
  useEffect(() => {
    const activeWordEl = document.getElementById('active-word');
    if (activeWordEl) {
      activeWordEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [input]);

  const evaluateTyping = (inputStr: string, originalStr: string) => {
    const inputWords = inputStr.split(' ');
    const originalWords = originalStr.split(' ');
    
    const wordStates = new Array(originalWords.length).fill('pending');
    let correctCount = 0;
    
    
    let i = 0;
    let j = 0;
    
    while (i < inputWords.length && j < originalWords.length) {
      const iw = inputWords[i];
      const ow = originalWords[j];
      const isLastInput = (i === inputWords.length - 1);
      
      if (isLastInput) {
        
        if (iw === '') {
           wordStates[j] = 'active-correct';
        } else if (ow.startsWith(iw)) {
           wordStates[j] = 'active-correct';
        } else {
           wordStates[j] = 'active-incorrect';
        }
        i++;
        j++;
      } else {
        if (iw === ow) {
          wordStates[j] = 'correct';
          correctCount++;
          i++;
          j++;
        } else {
          // Lookahead by 1 to resync
          if (i + 1 < inputWords.length && inputWords[i + 1] === ow) {
            i++; // skip the extra typed word
            continue;
          } else if (j + 1 < originalWords.length && iw === originalWords[j + 1]) {
            wordStates[j] = 'incorrect';
            j++;
            continue;
          } else {
            wordStates[j] = 'incorrect';
            i++;
            j++;
          }
        }
      }
    }
    
    // If the loop finished and we processed all original words, or we processed some, j is the number of attempted words
    return { correctCount, wordStates, activeIndex: j, originalWords };
  };

  
  const startTest = () => {
    setTimeLeft(selectedTime * 60);
    setInput('');
    setAccumulatedCorrect(0);
    setAccumulatedAttempted(0);
    setIsActive(true);
    setIsFinished(false);
    setWpm(0);
    setAccuracy(100);
    setCorrectWords(0);
    setText(textPool[Math.floor(Math.random() * textPool.length)]);
    setTimeout(() => inputRef.current?.focus(), 100);
  };


  
  const endTest = () => {
    setIsActive(false);
    setIsFinished(true);
    
    const { correctCount, activeIndex } = evaluateTyping(input, text);
    const finalCorrect = accumulatedCorrect + correctCount;
    setCorrectWords(finalCorrect);
    
    const minutes = (selectedTime * 60 - timeLeft) / 60 || 1/60; 
    const calculatedWpm = Math.round(finalCorrect / minutes);
    setWpm(calculatedWpm);
    
    const finalAttempted = accumulatedAttempted + activeIndex;
    const acc = finalAttempted > 0 ? Math.round((finalCorrect / finalAttempted) * 100) : 0;
    setAccuracy(acc);

    saveResult({
      type: 'typing',
      score: finalCorrect,
      duration: selectedTime * 60 - timeLeft,
      details: { wpm: calculatedWpm, accuracy: acc }
    });
  };


  
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInput(val);
    
    const { correctCount, activeIndex, originalWords } = evaluateTyping(val, text);
    const totalCorrectNow = accumulatedCorrect + correctCount;
    setCorrectWords(totalCorrectNow);
    
    const minutes = (selectedTime * 60 - timeLeft) / 60 || 1/60;
    setWpm(Math.round(totalCorrectNow / minutes));
    
    const totalAttemptedNow = accumulatedAttempted + activeIndex;
    setAccuracy(totalAttemptedNow > 0 ? Math.round((totalCorrectNow / totalAttemptedNow) * 100) : 100);
    
    // Auto-advance if we reached the end of this block
    // We check if we processed all words in the original text
    if (activeIndex >= originalWords.length) {
      setAccumulatedCorrect(accumulatedCorrect + correctCount);
      setAccumulatedAttempted(accumulatedAttempted + activeIndex);
      setInput('');
      setText(textPool[Math.floor(Math.random() * textPool.length)]);
    }
  };


  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const renderText = () => {
    const { wordStates, originalWords } = evaluateTyping(input, text);
    
    return originalWords.map((word, idx) => {
      const state = wordStates[idx];
      let colorClass = "text-slate-500"; 
      let isId = false;

      if (state === 'correct') colorClass = "text-green-600 bg-green-50";
      else if (state === 'incorrect') colorClass = "text-red-600 bg-red-50 underline";
      else if (state === 'active-correct') { colorClass = "text-blue-600 bg-blue-50 border-b-2 border-blue-600"; isId = true; }
      else if (state === 'active-incorrect') { colorClass = "text-red-600 bg-red-50 border-b-2 border-red-600"; isId = true; }

      return <span key={idx} id={isId ? 'active-word' : undefined} className={`${colorClass} rounded-sm transition-colors duration-150 leading-loose`}>{word} </span>;
    });
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Prueba de Dactilografía</h2>
        <div className="flex space-x-2 items-center">
          <label className="text-sm text-slate-600 font-medium">Tiempo:</label>
          <select 
            disabled={isActive}
            value={selectedTime}
            onChange={(e) => setSelectedTime(Number(e.target.value))}
            className="border-slate-300 rounded-md text-sm p-1 outline-none"
          >
            <option value={1}>1 Minuto</option>
            <option value={2}>2 Minutos</option>
            <option value={3}>3 Minutos</option>
            <option value={4}>4 Minutos (Oficial)</option>
          </select>
        </div>
      </div>

      {!isActive && !isFinished && (
        <div className="text-center py-12 bg-slate-50 rounded-lg border border-slate-200 border-dashed mb-6">
          <Keyboard size={48} className="mx-auto text-slate-400 mb-4" />
          <p className="text-slate-600 mb-6 max-w-md mx-auto">El objetivo del examen oficial es escribir correctamente 100 palabras en 4 minutos. ¿Listo para practicar?</p>
          <button onClick={startTest} className="bg-primary hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Iniciar Prueba
          </button>
        </div>
      )}

      {(isActive || isFinished) && (
        <>
          <div className="flex justify-between items-center bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
            <div className="text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Tiempo</p>
              <p className={`text-2xl font-mono font-bold ${timeLeft <= 30 && isActive ? 'text-red-600' : 'text-slate-800'}`}>
                {formatTime(timeLeft)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Palabras Correctas</p>
              <p className="text-2xl font-mono font-bold text-emerald-600">{correctWords}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">PPM (WPM)</p>
              <p className="text-2xl font-mono font-bold text-blue-600">{wpm}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Precisión</p>
              <p className="text-2xl font-mono font-bold text-slate-800">{accuracy}%</p>
            </div>
          </div>

          <div className="mb-6 p-6 bg-slate-50 rounded-lg border border-slate-200 text-lg select-none h-48 overflow-y-auto font-serif relative scroll-smooth">
            {renderText()}
          </div>

          <textarea
            ref={inputRef}
            disabled={!isActive}
            value={input}
            onChange={handleInput}
            className="w-full h-32 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none text-lg resize-none disabled:bg-slate-100 disabled:text-slate-500 font-serif"
            placeholder={isActive ? "Empieza a escribir aquí..." : "Prueba finalizada."}
            spellCheck="false"
          />

          {isFinished && (
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold mb-2">¡Prueba Finalizada!</h3>
              <p className="text-slate-600 mb-6">
                Lograste {correctWords} palabras correctas en {selectedTime * 60 - timeLeft} segundos.
                {selectedTime >= 4 && correctWords >= 100 ? (
                  <span className="block mt-2 text-emerald-600 font-bold">¡Aprobarías el examen oficial! Lograste un margen excelente de {correctWords} palabras.</span>
                ) : selectedTime >= 4 ? (
                  <span className="block mt-2 text-red-600 font-bold">Aún te faltan alcanzar las 100 palabras en 4 minutos. ¡Sigue practicando!</span>
                ) : null}
              </p>
              <button onClick={() => { setText(textPool[Math.floor(Math.random() * textPool.length)]); setIsFinished(false); }} className="bg-primary hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Practicar con otro texto
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
