import { getNombreAutor, getNombreCategoria, getNombreIdioma } from "../services/book-service.js";

export const getAutores = async (req, res) => {
    try{
        const autores = await getNombreAutor();
        res.json({ autores });
    }catch (error) {
        res.status(500).json({ error:'Error al obtener autores' })
    }
}

export const getIdiomas = async (req, res) => {
    try{
        const idiomas = await getNombreIdioma();
        res.json({ idiomas });
    }catch (error) {
        res.status(500).json({ error:'Error al obtener idiomas' })
    }
}

export const getCategorias = async (req, res) => {
    try{
        const categorias = await getNombreCategoria();
        res.json({ categorias });
    }catch (error) {
        res.status(500).json({ error:'Error al obtener categorias' })
    }
}

