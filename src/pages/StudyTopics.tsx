import { BookOpen } from 'lucide-react';
import { studyTopics } from '../data/topics';

export function StudyTopics() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center mb-2">
          <BookOpen className="mr-2 text-primary" />
          Temas de Estudio - Programa Oficial
        </h2>
        <p className="text-slate-600">
          Listado de los temas basados en el cuadernillo oficial de ingreso al Poder Judicial de San Juan.
        </p>
      </div>

      <div className="grid gap-4">
        {studyTopics.map((topic) => (
          <div key={topic.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-primary mb-2">{topic.title}</h3>
            <p className="text-slate-700">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
