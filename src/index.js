<<<<<<< HEAD
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { pool } = require("./database/connectionPostgreSQL.js");
const router = require("./routes/book-routes.js");
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/", router);

// Pruebas de alvin
app.get("/base", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  return res.json(result.rows[0]);
});

async function startServer() {
  try {
    await pool.connect();
    console.log("Conexión exitosa a la base de datos");

    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
}

startServer();
=======
import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/book-routes.js';

const app = express();


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 


app.use('/api/books', bookRoutes); 

app.use('/public', express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal. Por favor intenta de nuevo más tarde.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

>>>>>>> origin/datosConEndpointsYsubirLibro
