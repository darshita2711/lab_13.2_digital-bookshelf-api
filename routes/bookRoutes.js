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

router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(book);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// UPDATE BOOK
router.put("/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedBook) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(updatedBook);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});
export default router;