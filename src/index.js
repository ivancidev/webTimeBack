import { pool } from "./database/connectionPostgreSQL.js"
import express from 'express'
 import bookRoutes from './routes/book-routes.js'
 const app = express();

 app.use(bookRoutes);
 app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
 })
app.get('/base',async(req, res)=>{
    const result= await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

// getLibro();
app.listen(3000)

