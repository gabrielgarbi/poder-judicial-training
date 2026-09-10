import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { TypingTest } from './pages/TypingTest';
import { SpellingTest } from './pages/SpellingTest';
import { QuizTest } from './pages/QuizTest';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="typing" element={<TypingTest />} />
          <Route path="spelling" element={<SpellingTest />} />
          <Route path="quiz" element={<QuizTest />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
