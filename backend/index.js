const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample data
const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is the first project.'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is the second project.'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is the third project.'
  }
];

// API routes
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
