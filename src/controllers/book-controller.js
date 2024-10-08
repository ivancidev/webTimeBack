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

const addBook = async (req, res) => {
  const { titulo, autor, categoria, idioma, sinopsis } = req.body;
  console.log("Datos del libro recibidos:", {
    titulo,
    autor,
    categoria,
    idioma,
    sinopsis,
  });

  try {
    const codAutor = await getAutorByNombre(autor);

    if (!codAutor) return res.status(400).send("Autor no encontrado");

    const codCategoria = await getCategoriaByNombre(categoria);

    if (!codCategoria) return res.status(400).send("Categoría no encontrada");

    const codIdioma = await getIdiomaByNombre(idioma);

    if (!codIdioma) return res.status(400).send("Idioma no encontrado");

    const result = await insertBook(
      titulo,
      sinopsis,
      codAutor,
      codCategoria,
      codIdioma
    );

    res.status(201).send("Libro agregado correctamente");
  } catch (error) {
    console.error("Error al insertar libro:", error);
    res.status(500).send("Error al agregar el libro");
  }
};

module.exports = { getAuthors, getLanguages, getCategories, addBook };
