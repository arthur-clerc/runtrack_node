const express = require('express');
const router = express.Router();
const tasks = require('./data.json');

// GET toutes les tâches
router.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET une tâche par ID
router.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(task => task.id === taskId);
  if (!task) {
    return res.status(404).json({ message: 'Tâche non trouvée' });
  }
  res.json(task);
});

module.exports = router;
