
import express from "express";
import "dotenv/config";
import connectDB from "./db/connection.js";

const app = express();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Digital Bookshelf API is running!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
