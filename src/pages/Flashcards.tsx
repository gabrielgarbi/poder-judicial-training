import { useState, useEffect } from 'react';
import { questions, type Question } from '../data/questions';
import { BookOpen, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

export function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Shuffle the array on component mount so order is random every time
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  if (shuffledQuestions.length === 0) return null;

  const currentCard = shuffledQuestions[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledQuestions.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + shuffledQuestions.length) % shuffledQuestions.length);
    }, 150);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center">
            <BookOpen className="mr-2 text-primary" />
            Tarjetas de Estudio (Flashcards)
          </h2>
          <p className="text-slate-600 mt-1">Repasa los conceptos teóricos clave para el examen.</p>
        </div>
        <div className="text-slate-500 font-medium bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
          {currentIndex + 1} / {shuffledQuestions.length}
        </div>
      </div>

      <div className="relative w-full h-80 mb-8 cursor-pointer [perspective:1000px]" onClick={flipCard}>
        <div className={`w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
          
          {/* Front (Question) */}
          <div className="absolute w-full h-full [backface-visibility:hidden] bg-white border border-slate-200 shadow-md rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl text-slate-800 font-bold mb-4">{currentCard.question}</h3>
            <p className="text-slate-400 text-sm mt-auto flex items-center">
              <RotateCcw size={16} className="mr-1" />
              Haz clic para voltear
            </p>
          </div>

          {/* Back (Answer) */}
          <div className="absolute w-full h-full [backface-visibility:hidden] bg-blue-50 border border-blue-200 shadow-md rounded-2xl p-8 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)]">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">Respuesta Correcta</span>
            <p className="text-xl text-slate-800 font-medium mb-6">
              {currentCard.options[currentCard.correctAnswerIndex]}
            </p>
            <div className="bg-white p-4 rounded-lg border border-blue-100 w-full">
              <p className="text-slate-600 text-sm italic">{currentCard.explanation}</p>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <button 
          onClick={handlePrev}
          className="flex-1 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 border border-slate-300 rounded-xl shadow-sm transition-colors flex items-center justify-center"
        >
          <ChevronLeft className="mr-2" />
          Anterior
        </button>
        <button 
          onClick={handleNext}
          className="flex-1 bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors flex items-center justify-center"
        >
          Siguiente
          <ChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
