// routes/api.js
const express = require('express');
const router = express.Router();

let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

router.post('/items', (req, res) => {
  const newItem = { id: items.length + 1, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

router.get('/items', (req, res) => {
  res.json(items);
});

router.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

router.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (item) {
    Object.assign(item, req.body);
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

router.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id == req.params.id);
  if (index !== -1) {
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

module.exports = router;
