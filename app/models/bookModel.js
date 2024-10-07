const pool = require('../config/connectionPostgreSQL');

const getAutorByNombre = async (nombreAutor) => {
    try {
        const autorResult = await pool.query(
            `SELECT "codAutor" FROM "autor" WHERE LOWER("nombreAutor") = LOWER($1)`, [nombreAutor]);
        if (autorResult.rows.length === 0) {
            return null;
        }
        return autorResult.rows[0].codAutor;
    } catch (error) {
        console.error('Error al obtener el autor:', error);
        throw error;
    }
};

const getCategoriaByNombre = async (nombreCategoria) => {
    try {
        const categoriaResult = await pool.query(
            `SELECT "codCategoria" FROM "categoria" WHERE LOWER("nombreCategoria") = LOWER($1)`, [nombreCategoria]);
        if (categoriaResult.rows.length === 0) {
            return null;
        }
        return categoriaResult.rows[0].codCategoria;
    } catch (error) {
        console.error('Error al obtener la categoría:', error);
        throw error;
    }
};

const getIdiomaByNombre = async (nombreIdioma) => {
    try {
        const idiomaResult = await pool.query(
            `SELECT "codIdioma" FROM "idioma" WHERE LOWER("idioma") = LOWER($1)`, [nombreIdioma]);
        if (idiomaResult.rows.length === 0) {
            return null;
        }
        return idiomaResult.rows[0].codIdioma;
    } catch (error) {
        console.error('Error al obtener el idioma:', error);
        throw error;
    }
};

const insertBook = async (nombreLibro, sinopsis, codAutor, codCategoria, codIdioma) => {
    try {
        const result = await pool.query(
            `INSERT INTO "libro" ("nombreLibro", "sinopsis", "codAutor", "codCategoria", "codIdioma") 
             VALUES ($1, $2, $3, $4, $5) RETURNING *`, 
            [nombreLibro, sinopsis, codAutor, codCategoria, codIdioma]);
        return result.rows[0];
    } catch (error) {
        console.error('Error al insertar el libro:', error);
        throw error;
    }
};

module.exports = {
    getAutorByNombre,
    getCategoriaByNombre,
    getIdiomaByNombre,
    insertBook,
};
