import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, BookText, ChevronRight, ChevronLeft, Menu, ChevronDown, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { studyTopics } from '../data/topics';

export function StudyTopics() {
  const [activeTopic, setActiveTopic] = useState<number | null>(null);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [collapsedNodes, setCollapsedNodes] = useState<Set<number>>(new Set());

  const selectedTopic = studyTopics.find(t => t.id === activeTopic);

  const sections = useMemo(() => {
    if (!selectedTopic) return [];
    const secs: { title: string, content: string[], level: number, parentIdx: number, hasChildren: boolean }[] = [];
    let currentSection = { title: 'Introducción', content: [] as string[], level: 0, parentIdx: -1, hasChildren: false };
    
    selectedTopic.content.forEach(block => {
      const isHeading = block === block.toUpperCase() && block.length < 150 && block.length > 5;
      const isArticle = block.startsWith('ARTICULO') || block.startsWith('ARTÍCULO') || block.startsWith('ARTCULO');
      
      if (isHeading || isArticle) {
        if (currentSection.content.length > 0 || currentSection.title !== 'Introducción') {
          secs.push(currentSection);
        }
        
        let title = block;
        let bodyText = "";
        let level = 5;
        
        if (isArticle) {
          level = 6;
          const splitIdx = block.indexOf('. ');
          if (splitIdx !== -1 && splitIdx < 150) {
            title = block.substring(0, splitIdx + 1);
            bodyText = block.substring(splitIdx + 2);
          }
        } else {
          const t = block.trim().toUpperCase();
          if (t.startsWith('LEY') || t.startsWith('CÓDIGO') || t.startsWith('CODIGO')) level = 1;
          else if (t.startsWith('LIBRO') || t.startsWith('PARTE')) level = 2;
          else if (t.startsWith('TITULO') || t.startsWith('TÍTULO')) level = 3;
          else if (t.startsWith('CAPITULO') || t.startsWith('CAPÍTULO')) level = 4;
          else level = 5;
        }
        
        currentSection = { title: title, content: bodyText ? [bodyText] : [], level, parentIdx: -1, hasChildren: false };
      } else {
        if (block.trim().length > 0) {
          currentSection.content.push(block);
        }
      }
    });
    if (currentSection.content.length > 0 || currentSection.title !== 'Introducción') {
      secs.push(currentSection);
    }
    
    // Compute parents and children
    const stack: number[] = [];
    for (let i = 0; i < secs.length; i++) {
      while (stack.length > 0 && secs[stack[stack.length - 1]].level >= secs[i].level) {
        stack.pop();
      }
      if (stack.length > 0) {
        secs[i].parentIdx = stack[stack.length - 1];
        secs[stack[stack.length - 1]].hasChildren = true;
      } else {
        secs[i].parentIdx = -1;
      }
      stack.push(i);
    }
    
    return secs;
  }, [selectedTopic]);
  
  const isVisible = (idx: number) => {
    let curr = sections[idx].parentIdx;
    while (curr !== -1) {
      if (collapsedNodes.has(curr)) return false;
      curr = sections[curr].parentIdx;
    }
    return true;
  };
  
  const toggleCollapse = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newSet = new Set(collapsedNodes);
    if (newSet.has(idx)) newSet.delete(idx);
    else newSet.add(idx);
    setCollapsedNodes(newSet);
  };


  useEffect(() => {
    setActiveSectionIdx(0);
    window.scrollTo(0, 0);
  }, [activeTopic]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSectionIdx]);


  if (activeTopic && selectedTopic) {
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
            {sections.map((sec, idx) => {
              if (!isVisible(idx)) return null;
              
              // Normalize level for indentation
              // To prevent excessive indent if it starts at level 3, we subtract 1. Level 1 -> 0 padding, Level 2 -> 12px, etc.
              const indent = Math.max(0, (sec.level - 1) * 12);
              
              return (
                <li key={idx}>
                  <div 
                    className={`flex items-center w-full rounded-md transition-colors ${
                      idx === activeSectionIdx 
                        ? 'bg-emerald-50 text-emerald-700 font-semibold border-l-2 border-emerald-500' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                    style={{ paddingLeft: `${indent}px` }}
                  >
                    {sec.hasChildren ? (
                      <button 
                        onClick={(e) => toggleCollapse(idx, e)}
                        className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-slate-600 mr-1"
                      >
                        {collapsedNodes.has(idx) ? <ChevronRightIcon size={14} /> : <ChevronDown size={14} />}
                      </button>
                    ) : (
                      <div className="w-6" /> // spacer
                    )}
                    <button
                      onClick={() => { setActiveSectionIdx(idx); setShowSidebar(false); }}
                      className="text-left py-2 pr-3 text-sm flex-1 truncate"
                      title={sec.title}
                    >
                      {sec.title}
                    </button>
                  </div>
                </li>
              );
            })}
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
          
          <div className="prose prose-slate max-w-none prose-lg text-justify font-serif text-slate-800 text-lg">
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
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 flex items-center mb-2">
          <BookText className="mr-3 text-primary" size={32} />
          Material de Estudio Oficial
        </h2>
        <p className="text-slate-600 text-lg">
          Lee el cuadernillo completo de 365 páginas directamente desde aquí. Selecciona un módulo para comenzar a estudiar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {studyTopics.map((topic) => (
          <div 
            key={topic.id} 
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-primary hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            onClick={() => setActiveTopic(topic.id)}
          >
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">{topic.title}</h3>
              <p className="text-slate-600 text-sm line-clamp-3 mb-4">{topic.content[0] ? topic.content[0].substring(0, 150) : ""}...</p>
            </div>
            <span className="text-secondary font-medium text-sm flex items-center">
              Leer módulo <ArrowLeft className="ml-1 rotate-180" size={16} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
