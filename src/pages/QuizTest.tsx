import { useState, useEffect } from 'react';
import { useStorage } from '../hooks/useStorage';
import { questions } from '../data/questions';
import type { Question } from '../data/questions';
import { BookOpen } from 'lucide-react';

export function QuizTest() {
  const { saveResult } = useStorage();
  
  const [mode, setMode] = useState<'practice' | 'exam'>('practice');
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let interval: number;
    if (isActive && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive && mode === 'exam') {
      endTest();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode]);

  const startTest = () => {
    // Randomize questions
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = mode === 'exam' ? shuffled.slice(0, 100) : shuffled.slice(0, 5); // 5 for practice
    
    setCurrentQuestions(selected);
    setCurrentIdx(0);
    setAnswers(new Array(selected.length).fill(-1));
    
    if (mode === 'exam') {
      setTimeLeft(75 * 60); // 75 minutes
    } else {
      setTimeLeft(10 * 60); // 10 min practice
    }
    
    setIsActive(true);
    setIsFinished(false);
  };

  const handleAnswer = (optionIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIdx] = optionIdx;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentIdx < currentQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      endTest();
    }
  };

  const endTest = () => {
    setIsActive(false);
    setIsFinished(true);
    
    let correctCount = 0;
    answers.forEach((ans, idx) => {
      if (ans === currentQuestions[idx].correctAnswerIndex) correctCount++;
    });

    saveResult({
      type: 'quiz',
      score: correctCount,
      maxScore: currentQuestions.length,
      duration: mode === 'exam' ? 75 * 60 - timeLeft : 10 * 60 - timeLeft
    });
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  if (!isActive && !isFinished) {
    return (
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 text-center py-12">
        <BookOpen size={48} className="mx-auto text-slate-400 mb-4" />
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Prueba Teórica (Cuestionario)</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">Selecciona el modo de prueba. El examen oficial consta de 100 preguntas a resolver en 75 minutos (se aprueba con 71).</p>
        
        <div className="flex justify-center space-x-4">
          <button onClick={() => { setMode('practice'); startTest(); }} className="bg-purple-100 text-purple-700 hover:bg-purple-200 font-medium py-3 px-6 rounded-lg transition-colors">
            Modo Práctica (5 preguntas)
          </button>
          <button onClick={() => { setMode('exam'); startTest(); }} className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm">
            Simulador Examen (100 preguntas)
          </button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    let correctCount = 0;
    answers.forEach((ans, idx) => {
      if (ans === currentQuestions[idx].correctAnswerIndex) correctCount++;
    });
    
    const passed = (correctCount / currentQuestions.length) >= 0.71;

    return (
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Resultados</h2>
          <p className="text-xl">Obtuviste <span className="font-bold text-purple-600">{correctCount}</span> de {currentQuestions.length} respuestas correctas.</p>
          {mode === 'exam' && (
            <p className={`mt-4 text-xl font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>
              {passed ? '¡Aprobaste el simulacro!' : 'No alcanzaste el mínimo aprobatorio (71).'}
            </p>
          )}
          <button onClick={() => setIsFinished(false)} className="mt-6 bg-slate-800 hover:bg-slate-900 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Volver a intentar
          </button>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold border-b pb-2">Revisión de respuestas</h3>
          {currentQuestions.map((q, idx) => {
            const userAns = answers[idx];
            const isCorrect = userAns === q.correctAnswerIndex;
            return (
              <div key={q.id} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <p className="font-medium mb-3">{idx + 1}. {q.question}</p>
                <div className="space-y-2 mb-3">
                  {q.options.map((opt, oIdx) => (
                    <div key={oIdx} className={`px-3 py-2 rounded text-sm ${oIdx === q.correctAnswerIndex ? 'bg-green-200 text-green-900 font-medium' : oIdx === userAns ? 'bg-red-200 text-red-900 line-through' : 'bg-white border'}`}>
                      {opt}
                    </div>
                  ))}
                </div>
                {!isCorrect && (
                  <p className="text-sm text-slate-700 mt-2 bg-white/60 p-2 rounded">
                    <strong>Explicación:</strong> {q.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const q = currentQuestions[currentIdx];

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-800">Pregunta {currentIdx + 1} de {currentQuestions.length}</h2>
        <div className="text-right">
          <p className="text-xs text-slate-500 uppercase font-semibold">Tiempo Restante</p>
          <p className="text-xl font-mono font-bold text-purple-600">{formatTime(timeLeft)}</p>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-lg font-medium text-slate-800">{q.question}</p>
      </div>

      <div className="space-y-3 mb-8">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${answers[currentIdx] === idx ? 'border-purple-600 bg-purple-50' : 'border-slate-200 hover:border-purple-300 hover:bg-slate-50'}`}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button 
          onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
          disabled={currentIdx === 0}
          className="px-6 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        
        <button 
          onClick={nextQuestion}
          disabled={answers[currentIdx] === -1}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          {currentIdx === currentQuestions.length - 1 ? 'Finalizar' : 'Siguiente'}
        </button>
      </div>
    </div>
  );
}
