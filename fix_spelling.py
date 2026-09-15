import re
with open("src/pages/SpellingTest.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Imports
content = content.replace("import { spellingTexts } from '../data/texts';", "import { studyTopics } from '../data/topics';")

# 2. introduceErrors and text pool
error_func = """
  const [accumulatedScore, setAccumulatedScore] = useState(0);
  const [accumulatedMax, setAccumulatedMax] = useState(0);

  const textPool = studyTopics.flatMap(t => t.content).filter(c => c.split(' ').length > 20 && c.toUpperCase() !== c);

  const introduceErrors = (text: string) => {
    const words = text.split(' ');
    return words.map(w => {
      if (w.length < 4 || Math.random() > 0.3) return w; // 30% chance to have error
      
      let mod = w;
      const roll = Math.random();
      if (roll < 0.2) mod = mod.replace(/v/g, 'b');
      else if (roll < 0.4) mod = mod.replace(/b/g, 'v');
      else if (roll < 0.5) mod = mod.replace(/c/g, 's');
      else if (roll < 0.6) mod = mod.replace(/s/g, 'c');
      else if (roll < 0.7) mod = mod.replace(/h/g, '');
      else if (roll < 0.8) mod = mod.replace(/ll/g, 'y');
      else if (roll < 0.9) mod = mod.replace(/y/g, 'll');
      else mod = mod.normalize("NFD").replace(/[\\u0300-\\u036f]/g, ""); 
      return mod;
    }).join(' ');
  };

  const getNewText = () => {
    const original = textPool[Math.floor(Math.random() * textPool.length)];
    return { original, withErrors: introduceErrors(original) };
  };
"""

# Reset state
content = content.replace("const [input, setInput] = useState('');", "const [input, setInput] = useState('');\n" + error_func)
content = content.replace("const [currentText, setCurrentText] = useState(spellingTexts[0]);", "const [currentText, setCurrentText] = useState({ original: '', withErrors: '' });")

# Replace useEffect
old_eff = """
  useEffect(() => {
    const text = spellingTexts[Math.floor(Math.random() * spellingTexts.length)];
    setCurrentText(text);
    setMaxPossibleScore(text.original.trim().split(/\s+/).length);
  }, []);
"""
new_eff = """
  useEffect(() => {
    const initialText = getNewText();
    setCurrentText(initialText);
    setMaxPossibleScore(initialText.original.trim().split(/\s+/).length);
  }, []);
"""
# careful with string matching
content = content.replace("const text = spellingTexts[Math.floor(Math.random() * spellingTexts.length)];", "const text = getNewText();")
content = content.replace("setCurrentText(text);", "setCurrentText(text);")
content = content.replace("setMaxPossibleScore(text.original.trim().split(/\\s+/).length);", "setMaxPossibleScore(text.original.trim().split(/\\s+/).length);")


# 4. startTest
start_old = """
  const startTest = () => {
    setTimeLeft(selectedTime * 60);
    setInput(currentText.withErrors);
    setIsActive(true);
    setIsFinished(false);
    setScore(0);
  };
"""
start_new = """
  const startTest = () => {
    setTimeLeft(selectedTime * 60);
    const initialText = getNewText();
    setCurrentText(initialText);
    setInput(initialText.withErrors);
    setMaxPossibleScore(initialText.original.trim().split(/\\s+/).length);
    setIsActive(true);
    setIsFinished(false);
    setScore(0);
    setAccumulatedScore(0);
    setAccumulatedMax(0);
  };
"""
content = content.replace(start_old.strip(), start_new.strip())

# 5. Handle "Siguiente"
next_btn = """
          {isActive && (
            <div className="mt-4 flex justify-between">
              <button onClick={() => {
                const currentScore = calculateScore();
                setAccumulatedScore(accumulatedScore + currentScore);
                setAccumulatedMax(accumulatedMax + maxPossibleScore);
                
                const nextText = getNewText();
                setCurrentText(nextText);
                setInput(nextText.withErrors);
                setMaxPossibleScore(nextText.original.trim().split(/\\s+/).length);
              }} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Siguiente Texto
              </button>
              
              <button onClick={endTest} className="bg-slate-800 hover:bg-slate-900 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Terminar y Evaluar
              </button>
            </div>
          )}
"""
content = re.sub(r'\{isActive && \(\s*<div className="mt-4 flex justify-end">.*?<\/div>\s*\)\}', lambda m: next_btn, content, flags=re.DOTALL)

# 6. Score logic
end_old = """
  const endTest = () => {
    setIsActive(false);
    setIsFinished(true);
    
    const finalScore = calculateScore();
    setScore(finalScore);

    saveResult({
      type: 'spelling',
      score: finalScore,
      maxScore: maxPossibleScore,
      duration: selectedTime * 60 - timeLeft,
    });
  };
"""
end_new = """
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
"""
content = content.replace(end_old.strip(), end_new.strip())

# Fix restart button
content = content.replace(
    "const nextText = spellingTexts[Math.floor(Math.random() * spellingTexts.length)];", 
    "const nextText = getNewText();"
)

with open("src/pages/SpellingTest.tsx", "w", encoding="utf-8") as f:
    f.write(content)
