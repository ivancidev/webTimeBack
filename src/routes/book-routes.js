const express = require("express");
const {
  getAuthors,
  getCategories,
  getLanguages,
  uploadBook,
  uploadMiddleware,
  getBookPDF,
  getBooks
} = require("../controllers/book-controller");

const router = express.Router();

// router.post("/books", uploadBook);
router.get("/languages", getLanguages);
router.get("/authors", getAuthors);
router.get("/categories", getCategories);
router.get("/:id/archivoPDF", getBookPDF);
router.post("/subirLibro", uploadMiddleware, uploadBook);
router.get("/books", getBooks);


module.exports = router;
