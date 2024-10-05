import express from 'express'
 import bookRoutes from './routes/book-routes.js'
 const app = express();

 app.use(bookRoutes);
 app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
 })