import re

with open("src/pages/StudyTopics.tsx", "r", encoding="utf-8") as f:
    content = f.read()

import_old = "import { useState, useMemo, useEffect } from 'react';\nimport { ArrowLeft, BookText, ChevronRight, ChevronLeft, Menu } from 'lucide-react';"
import_new = "import { useState, useMemo, useEffect } from 'react';\nimport { ArrowLeft, BookText, ChevronRight, ChevronLeft, Menu, ChevronDown, ChevronRight as ChevronRightIcon } from 'lucide-react';"
content = content.replace(import_old, import_new)

# Add collapsedNodes state
comp_old = """  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);"""
comp_new = """  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [collapsedNodes, setCollapsedNodes] = useState<Set<number>>(new Set());"""
content = content.replace(comp_old, comp_new)

# Update useMemo logic
memo_old = """  const sections = useMemo(() => {
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
        
        let title = block;
        let bodyText = "";
        
        if (isArticle) {
          const splitIdx = block.indexOf('. ');
          if (splitIdx !== -1 && splitIdx < 150) {
            title = block.substring(0, splitIdx + 1);
            bodyText = block.substring(splitIdx + 2);
          }
        }
        
        currentSection = { title: title, content: bodyText ? [bodyText] : [] };
      } else {
        if (block.trim().length > 0) {
          currentSection.content.push(block);
        }
      }
    });
    if (currentSection.content.length > 0) secs.push(currentSection);
    // If no headings were found, it's all in Introducción
    return secs;
  }, [selectedTopic]);"""

memo_new = """  const sections = useMemo(() => {
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
"""
content = content.replace(memo_old, memo_new)

# Update sidebar rendering
sidebar_old = """          <ul className="space-y-1">
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
          </ul>"""

sidebar_new = """          <ul className="space-y-1">
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
          </ul>"""
content = content.replace(sidebar_old, sidebar_new)

with open("src/pages/StudyTopics.tsx", "w", encoding="utf-8") as f:
    f.write(content)
