// models/todoModel.js

const mongoose = require('mongoose');

// Define the Todo schema
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

// Create the model from the schema
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
