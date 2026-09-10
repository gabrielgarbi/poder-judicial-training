import { useStorage } from '../hooks/useStorage';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

export function Dashboard() {
  const { results } = useStorage();

  const typingResults = results.filter(r => r.type === 'typing').map((r, i) => ({
    name: `Intento ${i + 1}`,
    WPM: r.details?.wpm || 0,
    Precisión: r.details?.accuracy || 0,
    Palabras: r.score
  }));

  const spellingResults = results.filter(r => r.type === 'spelling').map((r, i) => ({
    name: `Intento ${i + 1}`,
    Puntaje: r.score,
    Max: r.maxScore
  }));
  
  const quizResults = results.filter(r => r.type === 'quiz').map((r, i) => ({
    name: `Intento ${i + 1}`,
    Aciertos: r.score
  }));

  if (results.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Aún no hay datos</h2>
        <p className="text-slate-500">Realiza algunas pruebas para ver tus gráficos de evolución.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-slate-800">Tu Progreso</h2>
      
      {typingResults.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-700 mb-6">Evolución en Dactilografía (PPM)</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={typingResults}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="WPM" stroke="#2563eb" strokeWidth={3} />
                <Line type="monotone" dataKey="Precisión" stroke="#64748b" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {spellingResults.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-700 mb-6">Evolución en Ortografía (Puntaje)</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={spellingResults}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Puntaje" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Max" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
      
      {quizResults.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-700 mb-6">Evolución en Examen Teórico (Aciertos)</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={quizResults}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Aciertos" stroke="#9333ea" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}
