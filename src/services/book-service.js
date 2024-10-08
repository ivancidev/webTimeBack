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
