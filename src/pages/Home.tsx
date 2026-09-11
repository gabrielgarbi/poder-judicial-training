import { useState } from 'react';
import { useStorage } from '../hooks/useStorage';
import { Keyboard, SpellCheck, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const { user, saveUser } = useStorage();
  const [nameInput, setNameInput] = useState('');

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <h1 className="text-2xl font-bold text-center text-primary mb-2">Poder Judicial San Juan</h1>
        <p className="text-center text-slate-500 mb-8">Plataforma de entrenamiento para el examen de ingreso</p>
        
        <form onSubmit={(e) => { e.preventDefault(); if(nameInput.trim()) saveUser(nameInput.trim()); }}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
            <input 
              type="text" 
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none"
              placeholder="Ej. Juan Pérez"
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            Comenzar Entrenamiento
          </button>
        </form>
      </div>
    );
  }

  const modules = [
    {
      title: 'Prueba de Dactilografía',
      desc: 'Transcribe textos jurídicos para alcanzar 100 palabras correctas en 4 minutos. Opciones de tiempo reducido.',
      icon: Keyboard,
      path: '/typing',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Prueba de Ortografía',
      desc: 'Corrige un texto con errores ortográficos intencionales. Opciones de tiempo variable y puntuación detallada.',
      icon: SpellCheck,
      path: '/spelling',
      color: 'bg-emerald-100 text-emerald-700'
    },
    {
      title: 'Prueba Teórica',
      desc: 'Cuestionarios de opción múltiple basados en el programa oficial (Constitución, leyes orgánicas, etc).',
      icon: BookOpen,
      path: '/quiz',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      title: 'Tarjetas de Estudio',
      desc: 'Flashcards para repasar y memorizar los conceptos teóricos clave de todo el programa del cuadernillo.',
      icon: BookOpen,
      path: '/flashcards',
      color: 'bg-amber-100 text-amber-700'
    },
    {
      title: 'Material de Estudio',
      desc: 'Lee el cuadernillo oficial completo de 365 páginas, dividido por módulos.',
      icon: BookOpen,
      path: '/topics',
      color: 'bg-indigo-100 text-indigo-700'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">¡Hola, {user.name}!</h2>
          <p className="text-slate-500">¿Qué módulo te gustaría practicar hoy?</p>
        </div>
        <div className="hidden sm:block text-right">
          <Link to="/dashboard" className="text-sm font-medium text-secondary hover:underline">Ver mi progreso &rarr;</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <Link key={m.path} to={m.path} className="group bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all hover:border-secondary flex flex-col h-full">
              <div className={`w-12 h-12 rounded-lg ${m.color} flex items-center justify-center mb-4`}>
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">{m.title}</h3>
              <p className="text-sm text-slate-500 flex-grow mb-4">{m.desc}</p>
              <div className="flex items-center text-sm font-medium text-secondary mt-auto">
                Practicar ahora <ChevronRight size={16} className="ml-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
