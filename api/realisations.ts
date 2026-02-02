import fs from 'fs';
import path from 'path';

export default async function handler(req: any, res: any) {
  // Allow only GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Read the index file to get list of realisations
    const indexPath = path.join(process.cwd(), 'public', 'content', 'realisations', 'index.json');
    const indexContent = fs.readFileSync(indexPath, 'utf-8');
    const fileList: string[] = JSON.parse(indexContent);

    // Load and parse each realisation file
    const contentDir = path.join(process.cwd(), 'public', 'content', 'realisations');
    const realisations = fileList
      .map(filename => {
        try {
          const filePath = path.join(contentDir, `${filename}.json`);
          const content = fs.readFileSync(filePath, 'utf-8');
          return JSON.parse(content);
        } catch (error) {
          console.error(`Error reading file ${filename}:`, error);
          return null;
        }
      })
      .filter(r => r !== null);

    // Sort by title for consistency
    realisations.sort((a: any, b: any) => a.title.localeCompare(b.title));

    return res.status(200).json(realisations);
  } catch (error: any) {
    console.error('Error loading realisations:', error);
    return res.status(500).json({ error: 'Failed to load realisations' });
  }
}
