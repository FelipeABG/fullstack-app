# Fullstack Book Management Application

This is a fullstack application for managing books with a React frontend and Express backend.

## Project Structure

```
.
├── backend          # Express server
├── frontend         # React application
├── db.sql           # Database dump with sample data
└── README.md        # This file
```

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MySQL](https://www.mysql.com/) server running

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/FelipeABG/fullstack-app.git
cd fullstack-app
```

### 2. Install dependencies

Install dependencies for the root project, frontend, and backend:

```bash
# Root dependencies
npm install

# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
```

### 3. Database Setup

1. Make sure your MySQL server is running
2. Import the database using the provided SQL dump file `db.sqlr`:

This will:

- Create a database named `web`
- Create a `books` table with the necessary schema
- Import 30 sample book entries with various titles, authors, genres, publication years, and page counts

If that does not work, here is the schema:

```sql
    DROP DATABASE IF EXISTS web;
    CREATE DATABASE IF NOT EXISTS web;
    use web;
    CREATE TABLE books (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(70) NOT NULL,
        author VARCHAR(70) NOT NULL,
        genre VARCHAR(50),
        published_year INT NOT NULL,
        pages INT NOT NULL
    );
```

3. Configure your database connection in the `backend/db.js` file (update credentials as needed)

### 4. Run the Application

#### Backend Server

```bash
cd backend
npm start
```

This will start the backend server using nodemon, which will automatically restart when you make changes. By default, the server should run on http://localhost:3000 (check the actual port in server.js).

#### Frontend Development Server

Open a new terminal window:

```bash
cd frontend
npm run dev
```

This will start the Vite development server. By default, it should be accessible at http://localhost:5173.

## Available Scripts

### Backend

- `npm start`: Start the backend server with nodemon for development

### Frontend

- `npm run dev`: Start the Vite development server
- `npm run build`: Build the frontend for production
- `npm run preview`: Preview the built application
- `npm run lint`: Run ESLint to check code quality
