require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT ;
const apiKey = process.env.API_KEY;

app.get('/', (req, res) => {
    res.send('Hello Nodemon!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

console.log(`La clave API es: ${apiKey}`);