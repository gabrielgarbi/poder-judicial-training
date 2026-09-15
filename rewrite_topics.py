import re

with open("src/pages/StudyTopics.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace imports
import_old = "import { useState } from 'react';\nimport { ArrowLeft, BookText } from 'lucide-react';"
import_new = "import { useState, useMemo, useEffect } from 'react';\nimport { ArrowLeft, BookText, ChevronRight, ChevronLeft, Menu } from 'lucide-react';"
content = content.replace(import_old, import_new)

# Add logic for activeSection inside the component
comp_old = """export function StudyTopics() {
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  const selectedTopic = studyTopics.find(t => t.id === activeTopic);"""

comp_new = """export function StudyTopics() {
  const [activeTopic, setActiveTopic] = useState<number | null>(null);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  const selectedTopic = studyTopics.find(t => t.id === activeTopic);

  const sections = useMemo(() => {
    if (!selectedTopic) return [];
    const secs: { title: string, content: string[] }[] = [];
    let currentSection = { title: 'Introducción', content: [] as string[] };
    
    selectedTopic.content.forEach(block => {
      const isHeading = block === block.toUpperCase() && block.length < 150 && block.length > 5;
      const isArticle = block.startsWith('ARTICULO') || block.startsWith('ARTÍCULO') || block.startsWith('ARTCULO');
      
      if (isHeading || isArticle) {
        if (currentSection.content.length > 0 || currentSection.title !== 'Introducción') {
          secs.push(currentSection);
        }
        currentSection = { title: block, content: [] };
      } else {
        if (block.trim().length > 0) {
          currentSection.content.push(block);
        }
      }
    });
    if (currentSection.content.length > 0) secs.push(currentSection);
    // If no headings were found, it's all in Introducción
    return secs;
  }, [selectedTopic]);

  useEffect(() => {
    setActiveSectionIdx(0);
    window.scrollTo(0, 0);
  }, [activeTopic]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSectionIdx]);
"""
content = content.replace(comp_old, comp_new)

# Replace the rendering of active topic
render_old = """  if (activeTopic && selectedTopic) {
    return (
      <div className="max-w-5xl mx-auto p-4 md:p-8 bg-white rounded-xl shadow-sm border border-slate-200 mt-4">
        <button 
          onClick={() => setActiveTopic(null)}
          className="flex items-center text-secondary hover:text-blue-800 mb-6 transition-colors font-medium"
        >
          <ArrowLeft className="mr-2" size={20} /> Volver al Índice
        </button>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">{selectedTopic.title}</h2>
        <hr className="mb-8 border-slate-200" />
        <div className="prose prose-slate max-w-none prose-lg">
          {selectedTopic.content.map((block, idx) => {
            const isHeading = block === block.toUpperCase() && block.length < 150 && block.length > 5;
            const isArticle = block.startsWith('ARTICULO') || block.startsWith('ARTÍCULO');
            
            if (isHeading || isArticle) {
              return (
                <h3 key={idx} className="text-xl font-bold text-slate-800 mt-8 mb-4 border-b border-slate-100 pb-2">
                  {block}
                </h3>
              );
            }
            return (
              <p key={idx} className="text-slate-800 leading-relaxed font-serif text-lg text-justify mb-4">
                {block}
              </p>
            );
          })}
        </div>
      </div>
    );
  }"""

render_new = """  if (activeTopic && selectedTopic) {
    const currentSec = sections[activeSectionIdx];

    return (
      <div className="max-w-7xl mx-auto p-4 md:p-8 mt-4 flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar */}
        <div className={`md:w-1/3 lg:w-1/4 flex-shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 p-4 sticky top-8 max-h-[85vh] overflow-y-auto ${showSidebar ? 'block' : 'hidden md:block'}`}>
          <button 
            onClick={() => setActiveTopic(null)}
            className="flex items-center text-secondary hover:text-blue-800 mb-6 transition-colors font-medium text-sm border-b pb-4 w-full"
          >
            <ArrowLeft className="mr-2" size={16} /> Volver al Índice
          </button>
          <h3 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">{selectedTopic.title}</h3>
          <ul className="space-y-1">
            {sections.map((sec, idx) => (
              <li key={idx}>
                <button
                  onClick={() => { setActiveSectionIdx(idx); setShowSidebar(false); }}
                  className={`text-left w-full px-3 py-2 text-sm rounded-md transition-colors ${
                    idx === activeSectionIdx 
                      ? 'bg-emerald-50 text-emerald-700 font-semibold border-l-2 border-emerald-500' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span className="line-clamp-2">{sec.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 lg:w-3/4 bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-10 min-h-[50vh]">
          <div className="md:hidden mb-6 flex justify-between items-center border-b pb-4">
             <button onClick={() => setActiveTopic(null)} className="text-slate-500 flex items-center text-sm font-medium hover:text-blue-800">
                <ArrowLeft size={16} className="mr-1" /> Atrás
             </button>
             <button onClick={() => setShowSidebar(!showSidebar)} className="bg-slate-100 p-2 rounded-md flex items-center text-sm font-medium">
               <Menu size={16} className="mr-2"/> Temario
             </button>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">
            {currentSec?.title}
          </h2>
          
          <div className="prose prose-slate max-w-none prose-lg">
            {currentSec?.content.map((block, idx) => (
              <p key={idx} className="text-slate-800 leading-relaxed font-serif text-lg text-justify mb-6">
                {block}
              </p>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={() => setActiveSectionIdx(Math.max(0, activeSectionIdx - 1))}
              disabled={activeSectionIdx === 0}
              className="flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
            >
              <ChevronLeft size={16} className="mr-2" /> Anterior
            </button>
            <span className="text-sm text-slate-500 font-medium">
              Sección {activeSectionIdx + 1} de {sections.length}
            </span>
            <button
              onClick={() => setActiveSectionIdx(Math.min(sections.length - 1, activeSectionIdx + 1))}
              disabled={activeSectionIdx === sections.length - 1}
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
            >
              Siguiente <ChevronRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  }"""
# Note: In `render_old`, I had a weird unicode `Í` issue in `Volver al ?ndice`. Let me use regex to make sure I match the old one perfectly.
content = re.sub(r'  if \(activeTopic && selectedTopic\) \{[\s\S]*?    \);\n  \}', render_new, content)

with open("src/pages/StudyTopics.tsx", "w", encoding="utf-8") as f:
    f.write(content)
