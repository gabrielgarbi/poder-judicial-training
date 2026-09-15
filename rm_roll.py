import re
with open("src/pages/SpellingTest.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = re.sub(r'\s*const roll = Math\.random\(\);', '', content)

with open("src/pages/SpellingTest.tsx", "w", encoding="utf-8") as f:
    f.write(content)
