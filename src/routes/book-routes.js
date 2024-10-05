import express from 'express'
import { getIdiomas, getAutores, getCategorias } from '../controllers/book-controller.js'

const router = express.Router();

router.get('/idiomas', getIdiomas);
router.get('/autores', getAutores);
router.get('/categorias', getCategorias);
export default router;