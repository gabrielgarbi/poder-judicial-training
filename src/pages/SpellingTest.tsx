import { useState, useEffect } from 'react';
import { useStorage } from '../hooks/useStorage';
import { studyTopics } from '../data/topics';
import { SpellCheck } from 'lucide-react';

export function SpellingTest() {
  const { saveResult } = useStorage();
  const [selectedTime, setSelectedTime] = useState<number>(5); // 5 minutes by default
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  
  const [currentText, setCurrentText] = useState({ original: '', withErrors: '' });
  const [input, setInput] = useState('');

  const [accumulatedScore, setAccumulatedScore] = useState(0);
  const [accumulatedMax, setAccumulatedMax] = useState(0);

  const buildPool = () => {
  const allBlocks = studyTopics.flatMap(t => t.content).filter(c => c.toUpperCase() !== c);
  const pool = [];
  let currentChunk = "";
  let currentWords = 0;
  
  for (const block of allBlocks) {
    const cleanBlock = block.replace(/\s+/g, ' ').trim();
    if (!cleanBlock) continue;
    
    currentChunk += (currentChunk ? " " : "") + cleanBlock;
    currentWords += cleanBlock.split(' ').length;
    
    if (currentWords >= 80) {
      pool.push(currentChunk);
      currentChunk = "";
      currentWords = 0;
    }
  }
  if (currentChunk.split(' ').length >= 30) {
    pool.push(currentChunk);
  }
  return pool;
};
const textPool = buildPool();

  const introduceErrors = (text: string) => {
    const words = text.split(' ');
    let errorCount = 0;
    const targetErrors = Math.floor(words.length * 0.15); // exactly 15% errors

    // Shuffle indices to distribute errors randomly
    const indices = Array.from({ length: words.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    for (const i of indices) {
      if (errorCount >= targetErrors) break;
      const w = words[i];
      if (w.length < 4) continue;
      
      let mod = w;
      
      // Try to apply a random valid transformation to avoid bias towards 'v'/'b'
      const possibleMods = [];
      if (mod.includes('v')) possibleMods.push(() => mod.replace('v', 'b'));
      if (mod.includes('b')) possibleMods.push(() => mod.replace('b', 'v'));
      if (mod.includes('c')) possibleMods.push(() => mod.replace('c', 's'));
      if (mod.includes('s')) possibleMods.push(() => mod.replace('s', 'c'));
      if (mod.includes('h')) possibleMods.push(() => mod.replace('h', ''));
      if (mod.includes('ll')) possibleMods.push(() => mod.replace('ll', 'y'));
      if (mod.includes('y')) possibleMods.push(() => mod.replace('y', 'll'));
      if (mod.includes('z')) possibleMods.push(() => mod.replace('z', 's'));
      if (mod.match(/[áéíóú]/)) possibleMods.push(() => mod.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
      
      if (possibleMods.length > 0) {
        // Pick a random transformation among the valid ones for this word
        mod = possibleMods[Math.floor(Math.random() * possibleMods.length)]();
        words[i] = mod;
        errorCount++;
      }
    }
    
    return words.join(' ');
  };

  const getNewText = () => {
    const original = textPool[Math.floor(Math.random() * textPool.length)];
    return { original, withErrors: introduceErrors(original) };
  };

  
  const [score, setScore] = useState(0);
  const [maxPossibleScore, setMaxPossibleScore] = useState(0);

  useEffect(() => {
    const text = getNewText();
    setCurrentText(text);
    setMaxPossibleScore(text.original.trim().split(/\s+/).length);
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
    const initialText = getNewText();
    setCurrentText(initialText);
    setInput(initialText.withErrors);
    setMaxPossibleScore(initialText.original.trim().split(/\s+/).length);
    setIsActive(true);
    setIsFinished(false);
    setScore(0);
    setAccumulatedScore(0);
    setAccumulatedMax(0);
  };

  const removeAccents = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const normalizeWord = (w: string) => w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();

  const calculateScore = () => {
    const inputWords = input.trim().split(/\s+/);
    const originalWords = currentText.original.trim().split(/\s+/);
    
    let currentScore = 0;
    
    // We compare word by word based on index for simplicity, 
    // assuming user doesn't add/remove words but edits them in place.
    const length = Math.min(inputWords.length, originalWords.length);
    
    for (let i = 0; i < length; i++) {
      const iw = normalizeWord(inputWords[i]);
      const ow = normalizeWord(originalWords[i]);
      
      if (iw === ow) {
        currentScore += 1;
      } else if (removeAccents(iw) === removeAccents(ow)) {
        currentScore += 0.5; // Accent error
      }
    }
    
    return currentScore;
  };

  const endTest = () => {
    setIsActive(false);
    setIsFinished(true);
    
    const finalScore = accumulatedScore + calculateScore();
    const finalMax = accumulatedMax + maxPossibleScore;
    
    setScore(finalScore);
    setMaxPossibleScore(finalMax);

    saveResult({
      type: 'spelling',
      score: finalScore,
      maxScore: finalMax,
      duration: selectedTime * 60 - timeLeft,
    });
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const renderFeedback = () => {
    const inputWords = input.trim().split(/\s+/);
    const originalWords = currentText.original.trim().split(/\s+/);
    
    return originalWords.map((origWord, i) => {
      const iw = i < inputWords.length ? inputWords[i] : "";
      const normIw = normalizeWord(iw);
      const normOw = normalizeWord(origWord);
      
      if (normIw === normOw) {
        return <span key={i} className="text-green-700 bg-green-50 mx-1">{iw} </span>;
      } else if (removeAccents(normIw) === removeAccents(normOw)) {
        return <span key={i} className="text-yellow-700 bg-yellow-100 mx-1 underline tooltip" title={`Era: ${origWord}`}>{iw || '_'} </span>;
      } else {
        return <span key={i} className="text-red-700 bg-red-100 mx-1 line-through tooltip" title={`Era: ${origWord}`}>{iw || '_'} </span>;
      }
    });
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Prueba de Ortografía</h2>
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
            <option value={5}>5 Minutos (Oficial)</option>
          </select>
        </div>
      </div>

      {!isActive && !isFinished && (
        <div className="text-center py-12 bg-slate-50 rounded-lg border border-slate-200 border-dashed mb-6">
          <SpellCheck size={48} className="mx-auto text-slate-400 mb-4" />
          <p className="text-slate-600 mb-2 max-w-md mx-auto">Corrige el siguiente texto. Ganas 1 punto por cada palabra perfecta y 0.5 puntos si te equivocas en la tilde.</p>
          <p className="text-xs text-slate-500 mb-6 max-w-md mx-auto">Importante: Trata de no borrar o agregar palabras nuevas, sólo corrige los errores ortográficos de las existentes.</p>
          <button onClick={startTest} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
            {isFinished && (
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Puntaje</p>
                <p className="text-2xl font-mono font-bold text-emerald-600">{score} <span className="text-sm text-slate-400">/ {maxPossibleScore}</span></p>
              </div>
            )}
          </div>

          {!isFinished ? (
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-48 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-lg resize-none font-serif leading-relaxed"
              spellCheck="false"
            />
          ) : (
            <div className="mb-6 p-6 bg-slate-50 rounded-lg border border-slate-200 text-lg leading-relaxed font-serif">
              <h4 className="text-sm font-bold text-slate-500 uppercase mb-4">Corrección (Posa el cursor para ver la original)</h4>
              <div className="leading-loose">
                {renderFeedback()}
              </div>
            </div>
          )}

          
          {isActive && (
            <div className="mt-4 flex justify-between">
              <button onClick={() => {
                const currentScore = calculateScore();
                setAccumulatedScore(accumulatedScore + currentScore);
                setAccumulatedMax(accumulatedMax + maxPossibleScore);
                
                const nextText = getNewText();
                setCurrentText(nextText);
                setInput(nextText.withErrors);
                setMaxPossibleScore(nextText.original.trim().split(/\s+/).length);
              }} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Siguiente Texto
              </button>
              
              <button onClick={endTest} className="bg-slate-800 hover:bg-slate-900 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Terminar y Evaluar
              </button>
            </div>
          )}


          {isFinished && (
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold mb-2">¡Prueba Finalizada!</h3>
              <p className="text-slate-600 mb-6">
                Obtuviste {score} puntos de {maxPossibleScore} posibles en {selectedTime * 60 - timeLeft} segundos.
              </p>
              <button onClick={() => { 
                  const nextText = getNewText();
                  setCurrentText(nextText);
                  setMaxPossibleScore(nextText.original.trim().split(/\s+/).length);
                  setIsFinished(false); 
                }} 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Practicar con otro texto
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
