import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/book-routes.js';

const app = express();


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 


app.use('/api/books', bookRoutes); 

app.use('/public', express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal. Por favor intenta de nuevo más tarde.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

