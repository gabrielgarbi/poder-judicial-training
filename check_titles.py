import re
import json

with open("src/data/topics.ts", "r", encoding="utf-8") as f:
    text = f.read()

titles = re.findall(r'title:\s*"(.*?)"', text)
for i, t in enumerate(titles):
    print(f'{i}: {t}')
