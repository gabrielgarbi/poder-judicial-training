with open("src/pages/SpellingTest.tsx", "r", encoding="utf-8") as f:
    spelling_content = f.read()

old_pool = "const textPool = studyTopics.flatMap(t => t.content).filter(c => c.split(' ').length > 20 && c.toUpperCase() !== c);"

new_pool = """const buildPool = () => {
  const allBlocks = studyTopics.flatMap(t => t.content).filter(c => c.toUpperCase() !== c);
  const pool = [];
  let currentChunk = "";
  let currentWords = 0;
  
  for (const block of allBlocks) {
    const cleanBlock = block.replace(/\\s+/g, ' ').trim();
    if (!cleanBlock) continue;
    
    currentChunk += (currentChunk ? " " : "") + cleanBlock;
    currentWords += cleanBlock.split(' ').length;
    
    if (currentWords >= 80) {
      pool.push(currentChunk);
      currentChunk = "";
      currentWords = 0;
    }
  }
  if (currentChunk.split(' ').length >= 30) {
    pool.push(currentChunk);
  }
  return pool;
};
const textPool = buildPool();"""

spelling_content = spelling_content.replace(old_pool, new_pool)

with open("src/pages/SpellingTest.tsx", "w", encoding="utf-8") as f:
    f.write(spelling_content)
