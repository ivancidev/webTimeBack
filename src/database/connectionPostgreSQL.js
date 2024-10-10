const pg = require("pg");
const dotenv = require('dotenv')
// const { Pool } = require("pg");
// const pool = new Pool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//   });

dotenv.config()
const pool = new pg.Pool({
  connectionString : process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, 
  }
});
module.exports = {pool};