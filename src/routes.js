const express = require('express');
// ### !!! Trocar por require-dir !!! ### //
const AddressController = require('./controllers/AddressController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users/:user_id/addresses', AddressController.index );
routes.post('/users/:user_id/addresses', AddressController.store );

routes.get('/users', UserController.index );
routes.post('/users', UserController.store );

module.exports = routes;