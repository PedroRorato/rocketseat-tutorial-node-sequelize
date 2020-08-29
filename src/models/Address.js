const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(connection) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            user: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }
}

module.exports = Address;