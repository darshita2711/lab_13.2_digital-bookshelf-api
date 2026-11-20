import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newBook = new Book(req.body);

        const savedBook = await newBook.save();

        res.status(201).json(savedBook);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});


router.get("/", async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json(books);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
export default router;