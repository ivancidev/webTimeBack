import pg from "pg"
import dotenv from 'dotenv'


dotenv.config()

const pool = new pg.Pool({
  connectionString : process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Esto permitirá conexiones a servidores SSL no verificados. Cambia a true si estás usando un certificado de confianza.
  }
});

export {pool}
