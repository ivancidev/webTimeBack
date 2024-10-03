import pg from "pg"

export const pool = new pg.Pool({
    host:"localhost",
    port:5432,
    database:"webtime",
    user:"postgres",
    password:"delunoalocho",
})