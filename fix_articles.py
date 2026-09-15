import re
with open("src/pages/StudyTopics.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace the block processing logic in useMemo
old_logic = """    selectedTopic.content.forEach(block => {
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
    });"""

new_logic = """    selectedTopic.content.forEach(block => {
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
    });"""

content = content.replace(old_logic, new_logic)

with open("src/pages/StudyTopics.tsx", "w", encoding="utf-8") as f:
    f.write(content)
