import { pool } from "../database/connectionPostgreSQL.js"
export const getNameAuthors= async ()=>{
    try{
        const result = await pool.query(`select autor from autor`)
        console.log(result.rows)
        return result.rows
    }catch(error){
        console.error(error)
    }
}
export const getNameCategories= async ()=>{
    try{
        const result = await pool.query(`select categoria from categoria`)
        console.log(result.rows)
        return result.rows
    }catch(error){
        console.error(error)
    }
}
export const getNameLanguages= async ()=>{
    try{
        const result = await pool.query(`select idioma from idioma`)
        console.log(result.rows)
        return result.rows
    }catch(error){
        console.error(error)
    }
}


export const insertBook = async ({ nombreLibro, sinopsis, enlaceLibro, enlaceAudio, enlacePortada, codAutor, codCategoria, codIdioma, archivoPDF, archivoAudio, archivoPortada }) => {
    try {
        const result = await pool.query(
            `INSERT INTO libro (nombreLibro, sinopsis, enlaceLibro, enlaceAudio, enlacePortada, codAutor, codCategoria, codIdioma, archivoPDF, archivoAudio, archivoPortada)
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
export const getBookById = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM libro WHERE codLibro = $1', [id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error al obtener el libro por ID:', error);
        throw error;
    }
};