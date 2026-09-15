import re
with open("src/pages/TypingTest.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Remove 'let activeIndex = 0;'
content = content.replace("let activeIndex = 0;", "")
# Remove 'activeIndex = j;'
content = content.replace("activeIndex = j;", "")

with open("src/pages/TypingTest.tsx", "w", encoding="utf-8") as f:
    f.write(content)
