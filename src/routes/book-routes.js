import express from 'express'
import { getLanguages, getAuthors, getCategories } from '../controllers/book-controller.js'

const router = express.Router();

router.get('/languages', getLanguages);
router.get('/authors', getAuthors);
router.get('/categories', getCategories);
export default router;