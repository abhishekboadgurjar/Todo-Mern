// controllers/todoController.js

const Todo = require('../models/todoModel');

// Get all Todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new Todo
const createTodo = async (req, res) => {
  const newTodo = new Todo({
    text: req.body.text,
  });

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a Todo by ID
const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a Todo (toggle completed status)
const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
