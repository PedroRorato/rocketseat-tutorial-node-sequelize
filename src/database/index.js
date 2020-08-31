const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Address = require('../models/Address');
const Tech = require('../models/Tech');
const User = require('../models/User');

const connection = new Sequelize(dbConfig);

// ### !!! Trocar por require-dir !!! ### //
Address.init(connection);
Tech.init(connection);
User.init(connection);

Address.associate(connection.models);
Tech.associate(connection.models);
User.associate(connection.models);

module.exports = connection;