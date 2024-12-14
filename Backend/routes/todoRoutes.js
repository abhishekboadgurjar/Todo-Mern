// routes/todoRoutes.js

const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Routes for todos
router.get('/', todoController.getAllTodos);              // Get all todos
router.post('/', todoController.createTodo);             // Create a new todo
router.delete('/:id', todoController.deleteTodo);       // Delete a todo
router.put('/:id', todoController.updateTodo);          // Update a todo (toggle completed)

module.exports = router;
