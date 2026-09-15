import re

with open("src/pages/StudyTopics.tsx", "r", encoding="utf-8") as f:
    content = f.read()

old_render = """          <div className="prose prose-slate max-w-none prose-lg">
            {currentSec?.content.map((block, idx) => (
              <p key={idx} className="text-slate-800 leading-relaxed font-serif text-lg text-justify mb-6">
                {block}
              </p>
            ))}
          </div>"""

new_render = """          <div className="prose prose-slate max-w-none prose-lg text-justify font-serif text-slate-800 text-lg">
            {(() => {
              const paragraphs: string[] = [];
              let currentPara = "";
              
              currentSec?.content.forEach(line => {
                const trimmed = line.trim();
                if (!trimmed) return;
                
                const isList = /^[a-zA-Z]\)|^\d+\.|^\d+\)/.test(trimmed);
                
                if (isList) {
                  if (currentPara) paragraphs.push(currentPara);
                  currentPara = trimmed;
                } else if (currentPara === "") {
                  currentPara = trimmed;
                } else {
                  // Connect with a space
                  currentPara += " " + trimmed;
                }

                // If this line is short and ends with a punctuation mark, 
                // it is highly likely the end of a physical paragraph in the PDF.
                if (trimmed.length < 90 && /[.:;]$/.test(trimmed)) {
                   paragraphs.push(currentPara);
                   currentPara = "";
                }
              });
              if (currentPara) paragraphs.push(currentPara);

              return paragraphs.map((p, idx) => {
                const isHeading = p.toUpperCase() === p && p.length < 150 && p.length > 5;
                if (isHeading) {
                  return <h4 key={idx} className="text-xl font-bold text-slate-800 mt-8 mb-4">{p}</h4>;
                }
                return (
                  <p key={idx} className="mb-5 leading-relaxed">
                    {p}
                  </p>
                );
              });
            })()}
          </div>"""

content = content.replace(old_render, new_render)

with open("src/pages/StudyTopics.tsx", "w", encoding="utf-8") as f:
    f.write(content)
