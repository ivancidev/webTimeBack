require('dotenv').config(); 

const express = require('express');
const app = express();
const booksRoutes = require('./routes/books');

const pool = require('./config/connectionPostgreSQL'); 

app.use(express.json());

app.use('/api', booksRoutes);


const port = process.env.PORT;  
if (!port) {
    console.error("Error: No se ha especificado el puerto en el archivo .env.");
    process.exit(1);  
}

pool.on('connect', () => {
    console.log('Conexión exitosa a la base de datos');
});
  
  pool.on('error', (err) => {
    console.error('Error en la conexión a la base de datos:', err);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});


