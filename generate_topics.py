import json
import re

file_path = r'C:\Users\gabig\Downloads\CUADERNILLO-2026.md'
try:
    with open(file_path, 'r', encoding='utf-8') as f:
        text = f.read()
except UnicodeDecodeError:
    with open(file_path, 'r', encoding='utf-16le') as f:
        text = f.read()

# The text has weird characters like '\ufb01' (fi) or '\ufb02' (fl)
# We can replace them to make it cleaner
text = text.replace('\ufb01', 'fi').replace('\ufb02', 'fl')

lines = text.split('\n')

topics = []
current_topic = None
current_content = []

for line in lines:
    line = line.strip()
    # Check if line looks like "TEMA I. DERECHO CONSTITUCIONAL"
    if line.startswith('TEMA ') and len(line) < 150:
        if current_topic:
            # We found a new topic, save the previous one
            topics.append({
                'title': current_topic,
                'content': '\n\n'.join(current_content).strip()
            })
        current_topic = line
        current_content = []
    elif line:
        current_content.append(line)

# Append the last one
if current_topic:
    topics.append({
        'title': current_topic,
        'content': '\n\n'.join(current_content).strip()
    })

# Now output as TypeScript
out_js = "export interface Topic {\n  id: number;\n  title: string;\n  description: string;\n  content: string;\n}\n\n"
out_js += "export const studyTopics: Topic[] = [\n"

# Only take the 9 main topics if there are exactly 9. Actually, let's just dump all topics found.
for i, topic in enumerate(topics):
    title_clean = topic['title'].replace('"', '\\"').replace('\r', '').strip()
    content_clean = topic['content'].replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$').strip()
    
    # Let's clean up multiple newlines
    content_clean = re.sub(r'\n{3,}', '\n\n', content_clean)
    
    # The file has a lot of extra newlines and spaces due to PDF parsing.
    # It might be better to merge lines that don't end in punctuation?
    # Actually, just replacing \n\n with \n and \n with space is safer for a continuous text, 
    # but some might be lists.
    # Let's just do a basic clean:
    # replace single newlines with space, double newlines with double newlines
    blocks = content_clean.split('\n\n')
    cleaned_blocks = []
    for b in blocks:
        # replace single newline with space
        b = b.replace('\n', ' ')
        # replace multiple spaces with single space
        b = re.sub(r'\s+', ' ', b)
        cleaned_blocks.append(b.strip())
    
    content_clean = '\n\n'.join(cleaned_blocks)
    
    out_js += f"  {{\n"
    out_js += f"    id: {i+1},\n"
    out_js += f'    title: "{title_clean}",\n'
    out_js += f'    description: "Material oficial extraído del cuadernillo",\n'
    out_js += f"    content: `{content_clean}`\n"
    out_js += f"  }},\n"

out_js += "];\n"

with open("src/data/topics.ts", "w", encoding="utf-8") as f:
    f.write(out_js)

print(f"Extracted {len(topics)} topics successfully.")
