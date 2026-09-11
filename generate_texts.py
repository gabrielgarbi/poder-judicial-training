import random
import re

try:
    with open(r"C:\Users\gabig\Downloads\CUADERNILLO-2026.md", "r", encoding="utf-8") as f:
        text = f.read()
except:
    with open(r"C:\Users\gabig\Downloads\CUADERNILLO-2026.md", "r", encoding="utf-16") as f:
        text = f.read()

# Clean up spaces
text = re.sub(r'\s+', ' ', text)

# Split by sentences or large chunks
sentences = [s.strip() for s in re.split(r'(?<=\.)\s+(?=[A-Z])', text) if len(s.split()) > 40 and len(s.split()) < 120]

selected = random.sample(sentences, min(20, len(sentences)))

typing = selected[:10]
spelling = selected[10:15]

out_js = "export const legalTexts = [\n"
for i, t in enumerate(typing):
    clean_t = t.replace('"', '\\"').replace("\x0c", "").strip()
    out_js += f'  {{\n    id: {i+1},\n    title: "Texto de Práctica {i+1}",\n    content: "{clean_t}"\n  }},\n'
out_js += "];\n\n"

def introduce_errors(text):
    words = text.split()
    for _ in range(max(1, len(words)//12)):
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

out_js += "export const spellingTexts = [\n"
for i, t in enumerate(spelling):
    clean_t = t.replace('"', '\\"').replace("\x0c", "").strip()
    bad_t = introduce_errors(clean_t)
    out_js += f'  {{\n    id: {i+1},\n    title: "Prueba Ortográfica {i+1}",\n    original: "{clean_t}",\n    withErrors: "{bad_t}"\n  }},\n'
out_js += "];\n"

with open("src/data/texts.ts", "w", encoding="utf-8") as f:
    f.write(out_js)

print("Texts successfully generated!")
