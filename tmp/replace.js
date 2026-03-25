const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    let fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk('c:/Users/shrey/Desktop/portfolio/src').filter(f => f.endsWith('.tsx') || f.endsWith('.css'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace colors and class names
  content = content.replace(/#22d3ee/g, '#ff8c00');
  content = content.replace(/glow-cyan/g, 'glow-orange-alt');
  content = content.replace(/cyan/gi, 'orange-alt');
  
  // Specific fix for index.css rgba color
  if (file.endsWith('index.css')) {
    content = content.replace(/rgba\(34, 211, 238, 0.5\)/g, 'rgba(255, 140, 0, 0.5)');
    content = content.replace(/--color-neon-orange-alt: #ff8c00;/g, '--color-neon-orange-alt: #ff8c00;'); // It's fine
  }

  // Specific fix for GitHub Calendar
  if (file.endsWith('GitHub.tsx')) {
    content = content.replace(
      /\['#0f0f0f', '#0f3c4c', '#156582', '#1b8eb8', '#ff8c00'\]/g,
      "['#0f0f0f', '#3a1a08', '#7a3400', '#cc5500', '#ff8c00']"
    );
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
  }
});
