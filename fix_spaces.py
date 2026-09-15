import re

# Fix TypingTest.tsx
with open("src/pages/TypingTest.tsx", "r", encoding="utf-8") as f:
    typing_content = f.read()

old_pool = "const textPool = studyTopics.flatMap(t => t.content).filter(c => c.split(' ').length > 20 && c.toUpperCase() !== c);"
new_pool = "const textPool = studyTopics.flatMap(t => t.content).filter(c => c.split(' ').length > 20 && c.toUpperCase() !== c).map(c => c.replace(/\\s+/g, ' ').trim());"
typing_content = typing_content.replace(old_pool, new_pool)

with open("src/pages/TypingTest.tsx", "w", encoding="utf-8") as f:
    f.write(typing_content)

# Fix SpellingTest.tsx
with open("src/pages/SpellingTest.tsx", "r", encoding="utf-8") as f:
    spelling_content = f.read()

spell_pool = "const textPool = studyTopics.flatMap(t => t.content).filter(c => c.split(' ').length > 15 && c.toUpperCase() !== c);"
new_spell_pool = "const textPool = studyTopics.flatMap(t => t.content).filter(c => c.split(' ').length > 15 && c.toUpperCase() !== c).map(c => c.replace(/\\s+/g, ' ').trim());"
spelling_content = spelling_content.replace(spell_pool, new_spell_pool)

with open("src/pages/SpellingTest.tsx", "w", encoding="utf-8") as f:
    f.write(spelling_content)
