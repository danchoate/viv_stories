const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const STORIES_DIR = path.join(__dirname, 'stories');

// Helper to parse story markdown
const parseStory = (filename) => {
  const filePath = path.join(STORIES_DIR, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  // Title is first line (removing #)
  const title = lines[0].replace(/^#\s*/, '').trim();
  
  // Description is first few characters of the body
  const body = lines.slice(1).join('\n').trim();
  const description = body.substring(0, 100).replace(/\n/g, ' ') + '...';
  
  return {
    id: filename,
    title,
    description,
    content: marked(content) // HTML version for rendering
  };
};

// API: Get all stories (summary only)
app.get('/api/stories', (req, res) => {
  try {
    const files = fs.readdirSync(STORIES_DIR).filter(f => f.endsWith('.md'));
    const stories = files.map(filename => {
      const story = parseStory(filename);
      return {
        id: story.id,
        title: story.title,
        description: story.description
      };
    });
    res.json(stories);
  } catch (error) {
    console.error('Error reading stories:', error);
    res.status(500).json({ error: 'Failed to load stories' });
  }
});

// API: Get a single story
app.get('/api/stories/:id', (req, res) => {
  try {
    const filename = req.params.id;
    const story = parseStory(filename);
    res.json(story);
  } catch (error) {
    console.error('Error reading story:', error);
    res.status(404).json({ error: 'Story not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
