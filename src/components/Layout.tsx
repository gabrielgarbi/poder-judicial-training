import { Link, Outlet, useLocation } from 'react-router-dom';
import { BookOpen, Keyboard, SpellCheck, BarChart3, Home } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio', icon: Home },
    { path: '/typing', label: 'Dactilografía', icon: Keyboard },
    { path: '/spelling', label: 'Ortografía', icon: SpellCheck },
    { path: '/quiz', label: 'Teoría', icon: BookOpen },
    { path: '/flashcards', label: 'Flashcards', icon: BookOpen },
    { path: '/topics', label: 'Temas', icon: BookOpen },
    { path: '/dashboard', label: 'Progreso', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <BookOpen size={24} />
              <span className="font-bold text-xl hidden sm:block">PJ San Juan - Prep</span>
            </div>
            <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-white/20 text-white' : 'text-slate-200 hover:bg-white/10 hover:text-white'}`}
                  >
                    <Icon size={18} />
                    <span className="hidden md:block">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm">
        <p>Preparación para Ingreso al Poder Judicial de San Juan</p>
      </footer>
    </div>
  );
}
