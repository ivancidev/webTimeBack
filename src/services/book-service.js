const { pool } = require("../database/connectionPostgreSQL");

const getNameAuthors = async () => {
  try {
    const result = await pool.query(`SELECT "codAutor", "nombreAutor" autor FROM autor`);
    console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};
const getNameCategories = async () => {
  try {
    const result = await pool.query(`SELECT "codCategoria", "nombreCategoria" FROM categoria`);
    console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};
const getNameLanguages = async () => {
  try {
    const result = await pool.query(`SELECT "codIdioma", "idioma" FROM idioma`);
    console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

const getAutorByNombre = async (nombreAutor) => {
  try {
    const autorResult = await pool.query(
      `SELECT "codAutor" FROM "autor" WHERE LOWER("nombreAutor") = LOWER($1)`,
      [nombreAutor]
    );
    if (autorResult.rows.length === 0) {
      return null;
    }
    return autorResult.rows[0].codAutor;
  } catch (error) {
    console.error("Error al obtener el autor:", error);
    throw error;
  }
};

const getCategoriaByNombre = async (nombreCategoria) => {
  try {
    const categoriaResult = await pool.query(
      `SELECT "codCategoria" FROM "categoria" WHERE LOWER("nombreCategoria") = LOWER($1)`,
      [nombreCategoria]
    );
    if (categoriaResult.rows.length === 0) {
      return null;
    }
    return categoriaResult.rows[0].codCategoria;
  } catch (error) {
    console.error("Error al obtener la categoría:", error);
    throw error;
  }
};

const getIdiomaByNombre = async (nombreIdioma) => {
  try {
    const idiomaResult = await pool.query(
      `SELECT "codIdioma" FROM "idioma" WHERE LOWER("idioma") = LOWER($1)`,
      [nombreIdioma]
    );
    if (idiomaResult.rows.length === 0) {
      return null;
    }
    return idiomaResult.rows[0].codIdioma;
  } catch (error) {
    console.error("Error al obtener el idioma:", error);
    throw error;
  }
};



const insertBook = async ({ nombreLibro, sinopsis, enlaceLibro, enlaceAudio, enlacePortada, codAutor, codCategoria, codIdioma, archivoPDF, archivoAudio, archivoPortada }) => {
    try {
        const result = await pool.query(
            `INSERT INTO libro ("nombreLibro", "sinopsis", "enlaceLibro", "enlaceAudio", "enlacePortada", "codAutor", "codCategoria", "codIdioma", "archivoPDF", "archivoAudio", "archivoPortada")
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
            [nombreLibro, sinopsis, enlaceLibro, enlaceAudio, enlacePortada, codAutor, codCategoria, codIdioma, archivoPDF, archivoAudio, archivoPortada]
        );
        console.log(result.rows[0]);
        return result.rows[0];
    } catch (error) {
        console.error('Error al insertar libro:', error);
        throw error;
    }
};
const getBookById = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM libro WHERE codLibro = $1', [id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error al obtener el libro por ID:', error);
        throw error;
    }
};

const getAllBooks = async () => {
  try {
      const result = await pool.query('SELECT "nombreLibro", "archivoPortada" FROM libro');
      return result.rows;
  } catch (error) {
      console.error('Error al obtener todos los libros:', error);
      throw error;
  }
};    

module.exports = {
  getNameAuthors,
  getNameCategories,
  getNameLanguages,
  getAutorByNombre,
  getCategoriaByNombre,
  getIdiomaByNombre,
  insertBook,
  getBookById,
  getAllBooks
};

