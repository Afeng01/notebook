import { globby } from 'globby';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export async function generateSidebar() {
  const contentDir = path.resolve(__dirname, '../../content');
  
  // Get all markdown files
  const files = await globby(['**/*.md'], {
    cwd: contentDir,
    ignore: ['**/node_modules/**']
  });

  const items = [];
  
  for (const file of files) {
    const fullPath = path.join(contentDir, file);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const { data: frontmatter } = matter(content);
    
    // Only include public files
    if (frontmatter.public) {
      const item = {
        text: frontmatter.title || path.basename(file, '.md'),
        link: '/content/' + file.replace(/\.md$/, ''),
        // Optional: include other metadata
        order: frontmatter.order || 0
      };
      
      items.push(item);
    }
  }
  
  // Sort items by order if specified
  items.sort((a, b) => a.order - b.order);
  
  return items;
} 