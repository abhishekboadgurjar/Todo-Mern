# MERN Todo Website

This repository contains a **MERN Stack Todo Application** that enables users to perform basic CRUD (Create, Read, Update, Delete) operations on a list of tasks. This project is ideal for beginners looking to understand how a full-stack application works, connecting a frontend (React) with a backend (Node.js and Express) and a MongoDB database.

---

## Features

- **Add Todo**: Create new tasks.
- **View Todos**: Display a list of all tasks.
- **Edit Todo**: Update existing tasks.
- **Delete Todo**: Remove tasks from the list.

---

## Technologies Used

### Frontend
- **React.js**: User interface development.
- **Axios**: HTTP requests to the backend.

### Backend
- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Framework for building RESTful APIs.

### Database
- **MongoDB**: Database for storing tasks.
- **Mongoose**: ORM for MongoDB, used for schema and database interaction.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB** (Local instance or cloud, e.g., MongoDB Atlas)

---

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abhishekboadgurjar/Todo-Mern.git
   cd Todo-Mern
   ```

2. **Install dependencies**:

   - For the backend:
     ```bash
     cd backend
     npm install
     ```

   - For the frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Setup environment variables**:
   - Create a `.env` file in the `backend` directory and add the following:
     ```env
     MONGO_URI=mongodb://localhost:27017/todo-app
     PORT=5000
     ```

---

### Running the Application

1. **Start MongoDB** (if using a local instance):
   ```bash
   mongod
   ```

2. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```

3. **Start the frontend development server**:
   ```bash
   cd ../frontend
   npm start
   ```

4. **Access the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---


## API Endpoints

| Method | Endpoint        | Description             |
|--------|-----------------|-------------------------|
| GET    | `/api/todos`    | Retrieve all todos      |
| POST   | `/api/todos`    | Add a new todo          |
| PUT    | `/api/todos/:id`| Update an existing todo |
| DELETE | `/api/todos/:id`| Delete a todo           |

---

## Future Enhancements

- Add user authentication and authorization.
- Implement due dates for tasks.
- Add support for categories or tags.

---



## Author

Developed by [Abhishek Gurjar](https://github.com/abhishekboadgurjar). Contributions and feedback are welcome! 😊
