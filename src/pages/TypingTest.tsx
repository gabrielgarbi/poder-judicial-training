import { useState, useEffect, useRef } from 'react';
import { useStorage } from '../hooks/useStorage';
import { legalTexts } from '../data/texts';
import { Keyboard } from 'lucide-react';

export function TypingTest() {
  const { saveResult } = useStorage();
  const [selectedTime, setSelectedTime] = useState<number>(4); // 4 minutes by default
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [correctWords, setCorrectWords] = useState(0);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Pick random text
    setText(legalTexts[Math.floor(Math.random() * legalTexts.length)].content);
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

  const startTest = () => {
    setTimeLeft(selectedTime * 60);
    setInput('');
    setIsActive(true);
    setIsFinished(false);
    setWpm(0);
    setAccuracy(100);
    setCorrectWords(0);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const endTest = () => {
    setIsActive(false);
    setIsFinished(true);
    
    // Calculate final stats
    const inputWords = input.trim().split(/\s+/).filter(w => w.length > 0);
    const originalWords = text.trim().split(/\s+/);
    
    let correct = 0;
    inputWords.forEach((word, idx) => {
      if (idx < originalWords.length && word === originalWords[idx]) {
        correct++;
      }
    });
    
    setCorrectWords(correct);
    
    const minutes = (selectedTime * 60 - timeLeft) / 60 || 1/60; 
    const calculatedWpm = Math.round(correct / minutes);
    setWpm(calculatedWpm);
    
    const acc = inputWords.length > 0 ? Math.round((correct / inputWords.length) * 100) : 0;
    setAccuracy(acc);

    saveResult({
      type: 'typing',
      score: correct,
      duration: selectedTime * 60 - timeLeft,
      details: { wpm: calculatedWpm, accuracy: acc }
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInput(val);
    
    // Live calculation
    const inputWords = val.trim().split(/\s+/).filter(w => w.length > 0);
    const originalWords = text.trim().split(/\s+/);
    let correct = 0;
    inputWords.forEach((word, idx) => {
      if (idx < originalWords.length && word === originalWords[idx]) {
        correct++;
      }
    });
    
    setCorrectWords(correct);
    const minutes = (selectedTime * 60 - timeLeft) / 60 || 1/60;
    setWpm(Math.round(correct / minutes));
    setAccuracy(inputWords.length > 0 ? Math.round((correct / inputWords.length) * 100) : 0);
    
    if (val.length >= text.length) {
      endTest();
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Render text with highlights
  const renderText = () => {
    const inputWords = input.split(' ');
    const originalWords = text.split(' ');
    
    return originalWords.map((word, idx) => {
      let colorClass = "text-slate-500"; // default
      if (idx < inputWords.length - 1 || (idx === inputWords.length - 1 && input.endsWith(' '))) {
        colorClass = word === inputWords[idx] ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50 underline";
      } else if (idx === inputWords.length - 1) {
        colorClass = word.startsWith(inputWords[idx]) ? "text-blue-600 bg-blue-50" : "text-red-600 bg-red-50";
      }
      return <span key={idx} className={`${colorClass} rounded-sm transition-colors duration-150`}>{word} </span>;
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

          <div className="mb-6 p-6 bg-slate-50 rounded-lg border border-slate-200 text-lg leading-relaxed select-none h-48 overflow-y-auto font-serif">
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
                  <span className="block mt-2 text-emerald-600 font-bold">¡Aprobarías el examen oficial!</span>
                ) : selectedTime >= 4 ? (
                  <span className="block mt-2 text-red-600 font-bold">Aún te faltan alcanzar las 100 palabras en 4 minutos. ¡Sigue practicando!</span>
                ) : null}
              </p>
              <button onClick={() => { setText(legalTexts[Math.floor(Math.random() * legalTexts.length)].content); setIsFinished(false); }} className="bg-primary hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Practicar con otro texto
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
