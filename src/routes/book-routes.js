const express = require('express');
const { getAuthors, getCategories, getLanguages, addBook } = require('../controllers/book-controller');

const router = express.Router();

router.post("/books", addBook);
router.get('/languages', getLanguages);
router.get('/authors', getAuthors);
router.get('/categories', getCategories);

module.exports = router;