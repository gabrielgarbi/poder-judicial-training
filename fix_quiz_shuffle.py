import re
with open("src/pages/QuizTest.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace the shuffle logic with Fisher-Yates
shuffle_old = """    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = mode === 'exam' ? shuffled.slice(0, 100) : shuffled.slice(0, 5); // 5 for practice"""

shuffle_new = """    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const selected = mode === 'exam' ? shuffled.slice(0, 100) : shuffled.slice(0, 5);"""

content = content.replace(shuffle_old, shuffle_new)

with open("src/pages/QuizTest.tsx", "w", encoding="utf-8") as f:
    f.write(content)
