require('dotenv/config');
const express = require('express');
//Importar Database
require('./database');

//Import Routes
const routes = require('./routes');

//Iniciar App
const app = express();

//Habilitar JSON
app.use(express.json());

//Rotas
app.use(routes);

//Listener
app.listen(3333, () => {
    console.log('Server Running...')
});