const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Address = require('../models/Address');
const User = require('../models/User');

const connection = new Sequelize(dbConfig);

// ### !!! Trocar por require-dir !!! ### //
Address.init(connection);
User.init(connection);

module.exports = connection;