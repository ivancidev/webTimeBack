//const express = require('express');
//const app = express();
//const port = 3000;
import { pool } from "./database/connectionPostgreSQL.js"

const getLibro= async ()=>{
    try{
        const result = await pool.query(`SELECT * FROM "LIBRO"`)
        console.log(result)
    }catch(error){
        console.error(error)
    }
}
getLibro();
