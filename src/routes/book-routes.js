<<<<<<< HEAD
const express = require('express');
const { getAuthors, getCategories, getLanguages, addBook } = require('../controllers/book-controller');
=======
import express from 'express'
import { getLanguages, getAuthors, getCategories, uploadBook, uploadMiddleware, getBookPDF } from '../controllers/book-controller.js'
>>>>>>> origin/datosConEndpointsYsubirLibro

const router = express.Router();

router.post("/books", addBook);
router.get('/languages', getLanguages);
router.get('/authors', getAuthors);
router.get('/categories', getCategories);
<<<<<<< HEAD

module.exports = router;
=======
router.get('/:id/archivoPDF', getBookPDF); 

router.post('/subirLibro', uploadMiddleware, uploadBook);

export default router;
>>>>>>> origin/datosConEndpointsYsubirLibro
