import { getNameAuthors, getNameCategories, getNameLanguages } from "../services/book-service.js";

export const getAuthors = async (req, res) => {
    try{
        const autores = await getNameAuthors();
        res.json({ autores });
    }catch (error) {
        res.status(500).json({ error:'Error al obtener autores' })
    }
}

export const getLanguages = async (req, res) => {
    try{
        const idiomas = await getNameLanguages();
        res.json({ idiomas });
    }catch (error) {
        res.status(500).json({ error:'Error al obtener idiomas' })
    }
}

export const getCategories = async (req, res) => {
    try{
        const categorias = await getNameCategories();
        res.json({ categorias });
    }catch (error) {
        res.status(500).json({ error:'Error al obtener categorias' })
    }
}

