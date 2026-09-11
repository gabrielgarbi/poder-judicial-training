import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { studyTopics } from '../data/topics';

export function StudyTopics() {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);

  const toggleTopic = (id: number) => {
    if (expandedTopic === id) {
      setExpandedTopic(null);
    } else {
      setExpandedTopic(id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center mb-2">
          <BookOpen className="mr-2 text-primary" />
          Temas de Estudio - Programa Oficial
        </h2>
        <p className="text-slate-600">
          Listado de los temas basados en el cuadernillo oficial de ingreso al Poder Judicial de San Juan. Haz click en un tema para leer el resumen teórico.
        </p>
      </div>

      <div className="grid gap-4">
        {studyTopics.map((topic) => {
          const isExpanded = expandedTopic === topic.id;
          return (
            <div 
              key={topic.id} 
              className={`bg-white rounded-xl shadow-sm border ${isExpanded ? 'border-primary ring-1 ring-primary' : 'border-slate-200'} hover:shadow-md transition-all cursor-pointer overflow-hidden`}
              onClick={() => toggleTopic(topic.id)}
            >
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isExpanded ? 'text-primary' : 'text-slate-800'}`}>
                    {topic.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{topic.description}</p>
                </div>
                <div className="ml-4 text-slate-400">
                  {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>
              
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 bg-slate-50 border-t border-slate-100">
                  <p className="text-slate-800 leading-relaxed font-serif text-lg whitespace-pre-line">
                    {topic.content}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
