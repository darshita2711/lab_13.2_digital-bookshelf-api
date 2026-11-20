# Digital Bookshelf API

## Project Description
Digital Bookshelf API is a RESTful API built using Node.js, Express.js, and MongoDB. It allows users to create, view, update, and delete book records.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- Postman

## Project Structure
```text
digital-bookshelf-api/
├── db/
│   └── connection.js
├── models/
│   └── Book.js
├── routes/
│   └── bookRoutes.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Book Schema
Each book contains:
- title
- author
- isbn
- publishedDate
- inStock

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/books | Create a new book |
| GET | /api/books | Get all books |
| GET | /api/books/:id | Get a book by ID |
| PUT | /api/books/:id | Update a book |
| DELETE | /api/books/:id | Delete a book |

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

4. Start the server:

```bash
node server.js
```

## Testing
All API endpoints were tested using Postman.

## Author
Created as a REST API development project to practice CRUD operations and MongoDB integration.