import express from "express";
import {
   get_books,
   delete_books,
   post_books,
   put_books,
} from "../controllers/books.js";
import multer from "multer";

const router = express.Router();
const upload = multer();
router.get("/books", get_books);
router.delete("/books/:bookid", delete_books);
router.post("/books", upload.array(), post_books);
router.put("/books", upload.array(), put_books);
export default router;
