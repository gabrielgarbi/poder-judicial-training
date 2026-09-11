import re
import random
import json

with open(r"C:\Users\gabig\Downloads\CUADERNILLO-2026.md", "r", encoding="utf-8") as f:
    lines = f.readlines()

text_blocks = []
current_block = []
topics = []

for i, line in enumerate(lines):
    line = line.strip()
    if line.startswith("TEMA "):
        topics.append(line)
        
    if line:
        current_block.append(line)
    
    # Check if this line is empty AND the previous was empty
    if not line and (i == 0 or not lines[i-1].strip()):
        # This is a real paragraph break (double empty line)
        pass
        
    # We will just split by "TEMA" or very long blocks
    if current_block and len(" ".join(current_block).split()) > 150:
        text_blocks.append(" ".join(current_block))
        current_block = []

if current_block and len(" ".join(current_block).split()) > 40:
    text_blocks.append(" ".join(current_block))

# Generate typing texts
typing_texts = random.sample(text_blocks, min(10, len(text_blocks)))
typing_js = "export const legalTexts = [\n"
for i, t in enumerate(typing_texts):
    clean_t = t.replace('"', '\\"').replace("\x0c", "")
    typing_js += f'  {{\n    id: {i+1},\n    title: "Texto de Práctica {i+1}",\n    content: "{clean_t}"\n  }},\n'
typing_js += "];\n"

# Generate spelling texts
spelling_texts = random.sample([t for t in text_blocks if t not in typing_texts], min(5, len(text_blocks)))
spelling_js = "export const spellingTexts = [\n"

def introduce_errors(text):
    words = text.split()
    for _ in range(max(1, len(words)//15)):
        idx = random.randint(0, len(words)-1)
        w = words[idx]
        if 'v' in w: w = w.replace('v', 'b', 1)
        elif 'b' in w: w = w.replace('b', 'v', 1)
        elif 'c' in w: w = w.replace('c', 's', 1)
        elif 's' in w: w = w.replace('s', 'c', 1)
        elif 'h' in w: w = w.replace('h', '', 1)
        elif 'y' in w: w = w.replace('y', 'll', 1)
        elif 'll' in w: w = w.replace('ll', 'y', 1)
        elif 'á' in w: w = w.replace('á', 'a', 1)
        elif 'é' in w: w = w.replace('é', 'e', 1)
        elif 'í' in w: w = w.replace('í', 'i', 1)
        elif 'ó' in w: w = w.replace('ó', 'o', 1)
        elif 'ú' in w: w = w.replace('ú', 'u', 1)
        words[idx] = w
    return " ".join(words)

for i, t in enumerate(spelling_texts):
    clean_t = t.replace('"', '\\"').replace("\x0c", "")
    bad_t = introduce_errors(clean_t)
    spelling_js += f'  {{\n    id: {i+1},\n    title: "Prueba Ortográfica {i+1}",\n    original: "{clean_t}",\n    withErrors: "{bad_t}"\n  }},\n'
spelling_js += "];\n"

with open("src/data/texts.ts", "w", encoding="utf-8") as f:
    f.write(typing_js + "\n" + spelling_js)

# Generate topics
topics_js = "export const studyTopics = [\n"
seen_topics = set()
top_id = 1
for top in topics:
    clean_top = top.replace('"', '\\"').replace("\x0c", "").strip()
    if clean_top not in seen_topics:
        seen_topics.add(clean_top)
        topics_js += f'  {{\n    id: {top_id},\n    title: "{clean_top}",\n    description: "Contenidos y conceptos clave relativos a {clean_top.lower()}"\n  }},\n'
        top_id += 1
topics_js += "];\n"

with open("src/data/topics.ts", "w", encoding="utf-8") as f:
    f.write(topics_js)

print(f"Extracted {len(typing_texts)} typing texts, {len(spelling_texts)} spelling texts, and {len(seen_topics)} topics.")
