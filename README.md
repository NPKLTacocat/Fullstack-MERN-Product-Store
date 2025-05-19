# Fullstack MERN Product Store

A fullstack web application for managing products, built with the MERN stack (MongoDB, Express, React, Node.js). This application allows users to create, view, update, and delete products with a clean and responsive user interface.

## Features

- **Product Management**: Create, read, update, and delete product listings
- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Dark/Light Mode**: Toggle between light and dark themes
- **Toast Notifications**: User-friendly feedback for actions
- **RESTful API**: Backend API for all product operations

## Tech Stack

### Frontend
- React - UI library
- React Router - Client-side routing
- Chakra UI - Component library
- Zustand - State management
- Vite - Build tool

### Backend
- Node.js - JavaScript runtime
- Express - Web framework
- MongoDB - Database
- Mongoose - MongoDB object modeling

## Prerequisites

- Node.js (v16.x or later)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```powershell
   git clone https://github.com/yourusername/fullstack-mern-product-store.git
   cd fullstack-mern-product-store
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

3. Install server dependencies:
   ```powershell
   npm install
   ```

4. Install frontend dependencies:
   ```powershell
   cd frontend
   npm install
   ```

## Usage

### Development Mode

1. Run the backend server (from the root directory):
   ```powershell
   npm run dev
   ```

2. Run the frontend development server (in a separate terminal):
   ```powershell
   cd frontend
   npm run dev
   ```

3. Access the application at `http://localhost:5173`

### Production Mode

1. Build the frontend:
   ```powershell
   npm run build
   ```

2. Start the production server:
   ```powershell
   npm start
   ```

3. Access the application at `http://localhost:5000`

## API Endpoints

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| GET    | /api/products      | Get all products        |
| POST   | /api/products      | Create a new product    |
| PUT    | /api/products/:id  | Update a product by ID  |
| DELETE | /api/products/:id  | Delete a product by ID  |

## Project Structure

```
fullstack-mern-product-store/
├── backend/             # Backend code
│   ├── config/          # Database configuration
│   ├── controllers/     # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── server.js        # Entry point
├── frontend/            # Frontend code
│   ├── public/          # Static files
│   ├── src/             # React source code
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   └── store/       # Zustand store
│   ├── index.html       # HTML template
│   └── vite.config.js   # Vite configuration
├── .env                 # Environment variables
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## License

This project is licensed under the MIT License.