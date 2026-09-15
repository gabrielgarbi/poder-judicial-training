import re

with open("src/pages/TypingTest.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace imports
content = content.replace("import { legalTexts } from '../data/texts';", "import { studyTopics } from '../data/topics';")

# Add accumulated state
state_code = """
  const [accumulatedCorrect, setAccumulatedCorrect] = useState(0);
  const [accumulatedAttempted, setAccumulatedAttempted] = useState(0);

  // Derive pool of texts
  const textPool = studyTopics.flatMap(t => t.content).filter(c => c.split(' ').length > 20 && c.toUpperCase() !== c);
"""

content = content.replace("const [input, setInput] = useState('');", "const [input, setInput] = useState('');\n" + state_code)
content = content.replace("legalTexts[Math.floor(Math.random() * legalTexts.length)].content", "textPool[Math.floor(Math.random() * textPool.length)]")

# Fix startTest
startTest_new = """
  const startTest = () => {
    setTimeLeft(selectedTime * 60);
    setInput('');
    setAccumulatedCorrect(0);
    setAccumulatedAttempted(0);
    setIsActive(true);
    setIsFinished(false);
    setWpm(0);
    setAccuracy(100);
    setCorrectWords(0);
    setText(textPool[Math.floor(Math.random() * textPool.length)]);
    setTimeout(() => inputRef.current?.focus(), 100);
  };
"""
content = re.sub(r'const startTest = \(\) => \{.*?\};', startTest_new, content, flags=re.DOTALL)

# Fix handleInput
handleInput_new = """
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInput(val);
    
    const { correctCount, activeIndex, originalWords } = evaluateTyping(val, text);
    const totalCorrectNow = accumulatedCorrect + correctCount;
    setCorrectWords(totalCorrectNow);
    
    const minutes = (selectedTime * 60 - timeLeft) / 60 || 1/60;
    setWpm(Math.round(totalCorrectNow / minutes));
    
    const totalAttemptedNow = accumulatedAttempted + activeIndex;
    setAccuracy(totalAttemptedNow > 0 ? Math.round((totalCorrectNow / totalAttemptedNow) * 100) : 100);
    
    // Auto-advance if we reached the end of this block
    // We check if we typed the last word AND added a space (meaning we finished the word)
    if (activeIndex >= originalWords.length - 1 && val.endsWith(' ')) {
      const finalEval = evaluateTyping(val, text);
      setAccumulatedCorrect(accumulatedCorrect + finalEval.correctCount);
      setAccumulatedAttempted(accumulatedAttempted + finalEval.activeIndex);
      setInput('');
      setText(textPool[Math.floor(Math.random() * textPool.length)]);
    }
  };
"""
content = re.sub(r'const handleInput = \(e: React.ChangeEvent<HTMLTextAreaElement>\) => \{.*?\};', handleInput_new, content, flags=re.DOTALL)

# Fix endTest
endTest_new = """
  const endTest = () => {
    setIsActive(false);
    setIsFinished(true);
    
    const { correctCount, activeIndex } = evaluateTyping(input, text);
    const finalCorrect = accumulatedCorrect + correctCount;
    setCorrectWords(finalCorrect);
    
    const minutes = (selectedTime * 60 - timeLeft) / 60 || 1/60; 
    const calculatedWpm = Math.round(finalCorrect / minutes);
    setWpm(calculatedWpm);
    
    const finalAttempted = accumulatedAttempted + activeIndex;
    const acc = finalAttempted > 0 ? Math.round((finalCorrect / finalAttempted) * 100) : 0;
    setAccuracy(acc);

    saveResult({
      type: 'typing',
      score: finalCorrect,
      duration: selectedTime * 60 - timeLeft,
      details: { wpm: calculatedWpm, accuracy: acc }
    });
  };
"""
content = re.sub(r'const endTest = \(\) => \{.*?\};', endTest_new, content, flags=re.DOTALL)

# Fix restart button
content = content.replace("setText(legalTexts[Math.floor(Math.random() * legalTexts.length)].content)", "setText(textPool[Math.floor(Math.random() * textPool.length)])")

with open("src/pages/TypingTest.tsx", "w", encoding="utf-8") as f:
    f.write(content)
