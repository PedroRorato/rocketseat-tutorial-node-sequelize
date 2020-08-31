const { Op } = require('sequelize');
const User = require("../models/User");

module.exports = {
    async show(request, response) {

        const { user_id } = request.params;

        const users = await User.findAll({
            attributes: [ 'id', 'name', 'email' ],
            where: {
                email: { 
                    [Op.like]: '%.com'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Rua Tuiuti' } },
                { 
                    association: 'techs',
                    required: false,
                    where: { 
                        name: { 
                            [Op.like]: 'React%'
                        } 
                    } 
                },
            ]
        });

        return response.json(users);
    }
};