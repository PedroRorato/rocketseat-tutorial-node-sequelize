const Tech = require("../models/Tech");
const User = require("../models/User");



module.exports = {
    async index(request, response) {

        const { user_id } = request.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'techs' }
        });

        if(!user) {
            return response.status(404).json({ error: "User not found" })
        }

        return response.json(user.techs);
    },

    async store(request, response) {
        const { user_id } = request.params;
        const { name } = request.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return response.status(404).json({ error: "User not found" })
        }

        const [ tech ] = await Tech.findOrCreate({
            where: { name }
        });

        await user.addTech(tech);

        return response.json(tech);
    },

    async destroy(request, response) {
        const { user_id } = request.params;
        const { name } = request.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return response.status(404).json({ error: "User not found" })
        }

        const tech = await Tech.findOne({
            where: { name }
        });

        await user.removeTech(tech);

        return response.json();
    }
};