const express = require('express');
const app = express();
const PORT = 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// In-memory data store
let items = [];

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// GET item by ID
app.get('/items/:id', (req, res) => {
  const id = req.params.id;
  const item = items.find(item => item.id === parseInt(id));
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
});

// PUT update item by ID
app.put('/items/:id', (req, res) => {
  const id = req.params.id;
  const updateItem = req.body;
  const index = items.findIndex(item => item.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  items[index] = { ...items[index], ...updateItem };
  res.json(items[index]);
});

// DELETE item by ID
app.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  const index = items.findIndex(item => item.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  items.splice(index, 1);
  res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
  console.log(Server is listening on port ${PORT});
});