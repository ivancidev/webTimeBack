import express from 'express'
import { getLanguages, getAuthors, getCategories, uploadBook, uploadMiddleware, getBookPDF } from '../controllers/book-controller.js'

const router = express.Router();

router.get('/languages', getLanguages);
router.get('/authors', getAuthors);
router.get('/categories', getCategories);
router.get('/:id/archivoPDF', getBookPDF); 

router.post('/subirLibro', uploadMiddleware, uploadBook);

export default router;