import { useState } from 'react';
import { ArrowLeft, BookText } from 'lucide-react';
import { studyTopics } from '../data/topics';

export function StudyTopics() {
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  const selectedTopic = studyTopics.find(t => t.id === activeTopic);

  if (activeTopic && selectedTopic) {
    return (
      <div className="max-w-5xl mx-auto p-4 md:p-8 bg-white rounded-xl shadow-sm border border-slate-200 mt-4">
        <button 
          onClick={() => setActiveTopic(null)}
          className="flex items-center text-secondary hover:text-blue-800 mb-6 transition-colors font-medium"
        >
          <ArrowLeft className="mr-2" size={20} /> Volver al Índice
        </button>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">{selectedTopic.title}</h2>
        <hr className="mb-8 border-slate-200" />
        <div className="prose prose-slate max-w-none prose-lg">
          {selectedTopic.content.map((block, idx) => {
            const isHeading = block === block.toUpperCase() && block.length < 150 && block.length > 5;
            const isArticle = block.startsWith('ARTICULO') || block.startsWith('ARTÍCULO');
            
            if (isHeading || isArticle) {
              return (
                <h3 key={idx} className="text-xl font-bold text-slate-800 mt-8 mb-4 border-b border-slate-100 pb-2">
                  {block}
                </h3>
              );
            }
            return (
              <p key={idx} className="text-slate-800 leading-relaxed font-serif text-lg text-justify mb-4">
                {block}
              </p>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 flex items-center mb-2">
          <BookText className="mr-3 text-primary" size={32} />
          Material de Estudio Oficial
        </h2>
        <p className="text-slate-600 text-lg">
          Lee el cuadernillo completo de 365 páginas directamente desde aquí. Selecciona un módulo para comenzar a estudiar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {studyTopics.map((topic) => (
          <div 
            key={topic.id} 
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-primary hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            onClick={() => setActiveTopic(topic.id)}
          >
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">{topic.title}</h3>
              <p className="text-slate-600 text-sm line-clamp-3 mb-4">{topic.content[0] ? topic.content[0].substring(0, 150) : ""}...</p>
            </div>
            <span className="text-secondary font-medium text-sm flex items-center">
              Leer módulo <ArrowLeft className="ml-1 rotate-180" size={16} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
