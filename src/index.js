import { pool } from "./database/connectionPostgreSQL.js"
import express from 'express'
 import bookRoutes from './routes/book-routes.js'
 require('dotenv').config();
 const app = express();

 const port = process.env.PORT;

 app.use(express.json());
 app.use('/',bookRoutes);
 
 app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
app.get('/base',async(req, res)=>{
    const result= await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})
ç

