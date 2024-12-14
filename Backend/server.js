const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = require("./config/db");
connectDB();

// Routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/todos", todoRoutes); // All todo-related routes

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
