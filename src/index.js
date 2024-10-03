


const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT ;
const apiKey = process.env.API_KEY;



//Para realizar la petición post
app.use(express.json());

const  pool  = require("./database/connectionPostgreSQL.js");

app.post('/books', async (req, res) => {
    const { titulo, autor, categoria, idioma, sinopsis } = req.body;
    console.log('Datos del libro recibidos:', { titulo, autor, categoria, idioma, sinopsis });

    try {
        // Obtener codAutor comparando en minúsculas
        const autorResult = await pool.query(
            `SELECT "codAutor" FROM "autor" WHERE LOWER("nombreAutor") = LOWER($1)`, [autor]);
        if (autorResult.rows.length === 0) {
            return res.status(400).send('Autor no encontrado');
        }
        const codAutor = autorResult.rows[0].codAutor;

        // Obtener codCategoria comparando en minúsculas
        const categoriaResult = await pool.query(
            `SELECT "codCategoria" FROM "categoria" WHERE LOWER("nombreCategoria") = LOWER($1)`, [categoria]);
        if (categoriaResult.rows.length === 0) {
            return res.status(400).send('Categoría no encontrada');
        }
        const codCategoria = categoriaResult.rows[0].codCategoria;

        // Obtener codIdioma comparando en minúsculas
        const idiomaResult = await pool.query(
            `SELECT "codIdioma" FROM "idioma" WHERE LOWER("idioma") = LOWER($1)`, [idioma]);
        if (idiomaResult.rows.length === 0) {
            return res.status(400).send('Idioma no encontrado');
        }
        const codIdioma = idiomaResult.rows[0].codIdioma;

        // Insertar el libro en la base de datos
        const result = await pool.query(
            `INSERT INTO "libro" 
                ("nombreLibro", "sinopsis", "codAutor", "codCategoria", "codIdioma") 
             VALUES ($1, $2, $3, $4, $5) 
             RETURNING *`, 
            [titulo, sinopsis, codAutor, codCategoria, codIdioma]);

        console.log('Libro insertado:', result.rows[0]);
        res.status(201).send('Libro agregado correctamente');
    } catch (error) {
        console.error('Error al insertar libro:', error);
        res.status(500).send('Error al agregar el libro');
    }
});








app.get('/', (req, res) => {
    res.send('Hello Nodemon!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

console.log(`La clave API es: ${apiKey}`);