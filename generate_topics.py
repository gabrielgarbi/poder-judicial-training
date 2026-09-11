import re

file_path = r'C:\Users\gabig\Downloads\CUADERNILLO-2026.md'
try:
    with open(file_path, 'r', encoding='utf-8') as f:
        text = f.read()
except UnicodeDecodeError:
    with open(file_path, 'r', encoding='utf-16le') as f:
        text = f.read()

text = text.replace('\ufb01', 'fi').replace('\ufb02', 'fl')

lines = [line.strip() for line in text.split('\n')]

topics = []
current_topic = None
current_content = []

i = 0
while i < len(lines):
    line = lines[i]
    
    if line.startswith('TEMA ') and len(line) < 150:
        if current_topic:
            topics.append({
                'title': current_topic,
                'content': current_content
            })
        current_topic = line
        current_content = []
        i += 1
        continue
    
    if line:
        # Check if it's a subheading (all caps, or starts with ARTICULO)
        # We will keep it as a separate block
        if line.isupper() or line.startswith('ARTICULO') or line.startswith('ARTÍCULO'):
            current_content.append("\n\n" + line + "\n\n")
        else:
            # It's a normal line. Let's peek ahead and join consecutive non-empty lines 
            # to form a single paragraph, removing arbitrary line breaks.
            para = [line]
            j = i + 1
            while j < len(lines) and lines[j]:
                nxt = lines[j]
                if nxt.startswith('TEMA ') or nxt.isupper() or nxt.startswith('ARTICULO') or nxt.startswith('ARTÍCULO'):
                    break
                para.append(nxt)
                j += 1
            
            paragraph_text = " ".join(para)
            current_content.append(paragraph_text)
            i = j - 1
            
    i += 1

if current_topic:
    topics.append({
        'title': current_topic,
        'content': current_content
    })

out_js = "export interface Topic {\n  id: number;\n  title: string;\n  description: string;\n  content: string[];\n}\n\n"
out_js += "export const studyTopics: Topic[] = [\n"

for i, topic in enumerate(topics):
    title_clean = topic['title'].replace('"', '\\"').replace('\r', '').strip()
    
    blocks = []
    for block in topic['content']:
        b = block.strip()
        if not b: continue
        # Escape quotes and backticks
        b = b.replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$')
        blocks.append(f"`{b}`")
    
    content_array = ",\n      ".join(blocks)
    
    out_js += f"  {{\n"
    out_js += f"    id: {i+1},\n"
    out_js += f'    title: "{title_clean}",\n'
    out_js += f'    description: "Material oficial extraído del cuadernillo",\n'
    out_js += f"    content: [\n      {content_array}\n    ]\n"
    out_js += f"  }},\n"

out_js += "];\n"

with open("src/data/topics.ts", "w", encoding="utf-8") as f:
    f.write(out_js)

print(f"Extracted {len(topics)} topics successfully with grouped paragraphs.")
