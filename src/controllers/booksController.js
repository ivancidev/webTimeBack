const bookModel = require('../services/bookModel');

const addBook = async (req, res) => {
    const { titulo, autor, categoria, idioma, sinopsis } = req.body;
    console.log('Datos del libro recibidos:', { titulo, autor, categoria, idioma, sinopsis });

    try {
        const codAutor=await bookModel.getAutorByNombre(autor);

        if (!codAutor) return res.status(400).send('Autor no encontrado');

        const codCategoria = await bookModel.getCategoriaByNombre(categoria);

        if (!codCategoria) return res.status(400).send('Categoría no encontrada');

        const codIdioma = await bookModel.getIdiomaByNombre(idioma);

        if (!codIdioma) return res.status(400).send('Idioma no encontrado');

        const result = await bookModel.insertBook(titulo, sinopsis, codAutor, codCategoria, codIdioma);

        res.status(201).send('Libro agregado correctamente');
    } catch (error) {
        console.error('Error al insertar libro:', error);
        res.status(500).send('Error al agregar el libro');
    }
};

module.exports = { addBook };
