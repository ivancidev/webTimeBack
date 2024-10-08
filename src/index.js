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
