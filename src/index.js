// const express = require('express');
import express from "express"
const app = express();
const port = 3000;
import { pool } from "./database/connectionPostgreSQL.js"

const getLibro= async ()=>{
    try{
        const result = await pool.query(`SELECT * FROM libro`)
        console.log(result)
    }catch(error){
        console.error(error)
    }
}
app.get('/',(req, res)=>{
    res.send("Hola Mundo")
})
getLibro();
app.listen(3000)

