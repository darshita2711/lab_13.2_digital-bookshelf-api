import express from "express";
import "dotenv/config";
import connectDB from "./db/connection.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Digital Bookshelf API is running!");
});

// app.get("/api/books/test", (req, res) => {
//     res.send("Book routes are working!");
// });

app.use("/api/books", bookRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});