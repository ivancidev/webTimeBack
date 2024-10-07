// const express = require('express');
import express from "express"
const app = express();
const port = 3000;
import { pool } from "./database/connectionPostgreSQL.js"

// const getLibro= async ()=>{
//     try{
//         const result = await pool.query(`SELECT * FROM libro`)
//         console.log(result)
//     }catch(error){
//         console.error(error)
//     }
// }
app.get('/',(req, res)=>{
    res.send("funcionando")
})

app.get('/hola',(req, res) =>{
    res.send("hola mundo")
})

app.get('/base',async(req, res)=>{
    const result= await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

// getLibro();
app.listen(3000)

