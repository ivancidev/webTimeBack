const {
  getNameAuthors,
  getNameLanguages,
  getNameCategories,
  getAutorByNombre,
  getIdiomaByNombre,
  getCategoriaByNombre,
  insertBook,
} = require("../services/book-service");

const getAuthors = async (req, res) => {
  try {
    const autores = await getNameAuthors();
    res.json({ autores });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener autores" });
  }
};

const getLanguages = async (req, res) => {
  try {
    const idiomas = await getNameLanguages();
    res.json({ idiomas });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener idiomas" });
  }
};

const getCategories = async (req, res) => {
  try {
    const categorias = await getNameCategories();
    res.json({ categorias });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener categorias" });
  }
};

const uploadBook = async (req, res) => {
    try {
        const { nombreLibro, sinopsis, enlaceLibro, enlaceAudio, enlacePortada, codAutor, codCategoria, codIdioma } = req.body;
        
        // Obtener los archivos de la solicitud
        const archivoPDF = req.files['archivoPDF'] ? req.files['archivoPDF'][0].buffer : null;
        const archivoAudio = req.files['archivoAudio'] ? req.files['archivoAudio'][0].buffer : null;
        const archivoPortada = req.files['archivoPortada'] ? req.files['archivoPortada'][0].buffer : null;

        // Llamada al servicio para insertar los datos del libro
        const nuevoLibro = await insertBook({
            nombreLibro,
            sinopsis,
            enlaceLibro,
            enlaceAudio,
            enlacePortada,
            codAutor,
            codCategoria,
            codIdioma,
            archivoPDF,
            archivoAudio,
            archivoPortada
        });

        res.status(201).json(nuevoLibro);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al subir los archivos del libro' });
    }
};


const getBookPDF = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el id del libro desde la URL
        const libro = await getBookById(id); // Llamar al servicio para obtener el libro desde la BD

        if (!libro || !libro.archivoPDF) {
            return res.status(404).json({ error: 'Archivo PDF no encontrado' });
        }

        res.set('Content-Type', 'application/pdf'); // Configurar el tipo de contenido
        res.send(libro.archivoPDF); // Enviar el archivo PDF
    } catch (error) {
        console.error('Error al obtener el archivo PDF:', error);
        res.status(500).json({ error: 'Error al obtener el archivo PDF' });
    }
};
module.exports = { getAuthors, getLanguages, getCategories, addBook, uploadBook, getBookPDF };
