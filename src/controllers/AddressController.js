const Address = require("../models/Address");
const User = require("../models/User");


module.exports = {
    async index(request, response) {

        const users = await Address.findAll();

        return response.json(users);
    },

    async store(request, response) {
        const { user_id } = request.params;
        const { zipcode, street, number } = request.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return response.status(404).json({ error: "User not found" })
        }

        return response.json(user);
    }
};