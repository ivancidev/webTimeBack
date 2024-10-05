import { pool } from "../database/connectionPostgreSQL.js"
export const getNombreAutor= async ()=>{
    try{
        const result = await pool.query(`select autor from autor`)
        console.log(result.rows)
        return result.rows
    }catch(error){
        console.error(error)
    }
}
export const getNombreCategoria= async ()=>{
    try{
        const result = await pool.query(`select categoria from categoria`)
        console.log(result.rows)
        return result.rows
    }catch(error){
        console.error(error)
    }
}
export const getNombreIdioma= async ()=>{
    try{
        const result = await pool.query(`select idioma from idioma`)
        console.log(result.rows)
        return result.rows
    }catch(error){
        console.error(error)
    }
}
