import re

with open("src/data/topics.ts", "r", encoding="utf-8") as f:
    text = f.read()

blocks = text.split('  {\n    id:')
print("Block lengths:")
for i, b in enumerate(blocks[1:]):
    content_len = len(b)
    title = re.search(r'title:\s*"(.*?)"', b).group(1) if re.search(r'title:\s*"(.*?)"', b) else "No title"
    print(f"{i}: {title} -> {content_len} chars")
