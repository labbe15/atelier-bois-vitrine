import fs from 'fs';
import path from 'path';

export default async function handler(req: any, res: any) {
  // Allow only GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get all JSON files from public/content/realisations directory
    const contentDir = path.join(process.cwd(), 'public', 'content', 'realisations');
    
    // Read all files in the directory
    const files = fs.readdirSync(contentDir).filter(file => 
      file.endsWith('.json') && file !== 'index.json'
    );

    // Load and parse each realisation file
    const realisations = files
      .map(file => {
        try {
          const filePath = path.join(contentDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          return JSON.parse(content);
        } catch (error) {
          console.error(`Error reading file ${file}:`, error);
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
