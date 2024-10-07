require('dotenv').config(); 

const express = require('express');
const app = express();
const booksRoutes = require('./routes/books');


app.use(express.json());

app.use('/api', booksRoutes);


const port = process.env.PORT;  
if (!port) {
    console.error("Error: No se ha especificado el puerto en el archivo .env.");
    process.exit(1);  
}

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
