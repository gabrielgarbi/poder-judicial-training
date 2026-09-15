import re

with open("src/pages/SpellingTest.tsx", "r", encoding="utf-8") as f:
    content = f.read()

old_func = """  const introduceErrors = (text: string) => {
    const words = text.split(' ');
    return words.map(w => {
      if (w.length < 4 || Math.random() > 0.3) return w; // 30% chance to have error
      
      let mod = w;
      const roll = Math.random();
      if (roll < 0.2) mod = mod.replace(/v/g, 'b');
      else if (roll < 0.4) mod = mod.replace(/b/g, 'v');
      else if (roll < 0.5) mod = mod.replace(/c/g, 's');
      else if (roll < 0.6) mod = mod.replace(/s/g, 'c');
      else if (roll < 0.7) mod = mod.replace(/h/g, '');
      else if (roll < 0.8) mod = mod.replace(/ll/g, 'y');
      else if (roll < 0.9) mod = mod.replace(/y/g, 'll');
      else mod = mod.normalize("NFD").replace(/[\\u0300-\\u036f]/g, ""); 
      return mod;
    }).join(' ');
  };"""

new_func = """  const introduceErrors = (text: string) => {
    const words = text.split(' ');
    let errorCount = 0;
    const targetErrors = Math.floor(words.length * 0.15); // exactly 15% errors

    // Shuffle indices to distribute errors randomly
    const indices = Array.from({ length: words.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    for (const i of indices) {
      if (errorCount >= targetErrors) break;
      const w = words[i];
      if (w.length < 4) continue;
      
      let mod = w;
      const roll = Math.random();
      
      // Try to apply a random valid transformation to avoid bias towards 'v'/'b'
      const possibleMods = [];
      if (mod.includes('v')) possibleMods.push(() => mod.replace('v', 'b'));
      if (mod.includes('b')) possibleMods.push(() => mod.replace('b', 'v'));
      if (mod.includes('c')) possibleMods.push(() => mod.replace('c', 's'));
      if (mod.includes('s')) possibleMods.push(() => mod.replace('s', 'c'));
      if (mod.includes('h')) possibleMods.push(() => mod.replace('h', ''));
      if (mod.includes('ll')) possibleMods.push(() => mod.replace('ll', 'y'));
      if (mod.includes('y')) possibleMods.push(() => mod.replace('y', 'll'));
      if (mod.includes('z')) possibleMods.push(() => mod.replace('z', 's'));
      if (mod.match(/[áéíóú]/)) possibleMods.push(() => mod.normalize("NFD").replace(/[\\u0300-\\u036f]/g, ""));
      
      if (possibleMods.length > 0) {
        // Pick a random transformation among the valid ones for this word
        mod = possibleMods[Math.floor(Math.random() * possibleMods.length)]();
        words[i] = mod;
        errorCount++;
      }
    }
    
    return words.join(' ');
  };"""

content = content.replace(old_func, new_func)

with open("src/pages/SpellingTest.tsx", "w", encoding="utf-8") as f:
    f.write(content)
