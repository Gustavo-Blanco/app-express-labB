const express = require('express');
const {clientes,productos} = require('./data.js');
const app = express();

app.get('/', (req,res) => {
    res.end('<h1>Hola mundo express - Gustavo Blanco</h1>');
});

app.get('/clientes', (req,res) => {
    res.json(clientes);
});
app.get('/productos', (req,res) => {
    res.json(productos);
});

app.listen(9000, (req,res) => {
    console.log('Listen on port 9000');
});