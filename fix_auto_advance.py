import re

with open("src/pages/TypingTest.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace activeIndex with wordsProcessed in evaluateTyping
eval_old = """
    return { correctCount, wordStates, activeIndex, originalWords };
"""
eval_new = """
    // If the loop finished and we processed all original words, or we processed some, j is the number of attempted words
    return { correctCount, wordStates, activeIndex: j, originalWords };
"""
content = content.replace(eval_old, eval_new)

# In handleInput, use activeIndex (which is now j) to auto-advance
handle_old = """
    // Auto-advance if we reached the end of this block
    // We check if we typed the last word AND added a space (meaning we finished the word)
    if (activeIndex >= originalWords.length - 1 && val.endsWith(' ')) {
      const finalEval = evaluateTyping(val, text);
      setAccumulatedCorrect(accumulatedCorrect + finalEval.correctCount);
      setAccumulatedAttempted(accumulatedAttempted + finalEval.activeIndex);
      setInput('');
      setText(textPool[Math.floor(Math.random() * textPool.length)]);
    }
"""
handle_new = """
    // Auto-advance if we reached the end of this block
    // We check if we processed all words in the original text
    if (activeIndex >= originalWords.length) {
      setAccumulatedCorrect(accumulatedCorrect + correctCount);
      setAccumulatedAttempted(accumulatedAttempted + activeIndex);
      setInput('');
      setText(textPool[Math.floor(Math.random() * textPool.length)]);
    }
"""
content = content.replace(handle_old, handle_new)

with open("src/pages/TypingTest.tsx", "w", encoding="utf-8") as f:
    f.write(content)
