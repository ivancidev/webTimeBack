require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT ;
const apiKey = process.env.API_KEY;


//Para realizar la petición post
app.use(express.json());

app.post('/books', (req, res) => {
    const { titulo, autor, categoria, idioma, sinopsis } = req.body;
    console.log('Datos del libro recibidos:', { titulo, autor, categoria, idioma, sinopsis });
  
    //Aqui pones el codigo para registrarlo en la base de datos
  
    res.status(201).send('Libro agregado correctamente');
  });



app.get('/', (req, res) => {
    res.send('Hello Nodemon!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

console.log(`La clave API es: ${apiKey}`);