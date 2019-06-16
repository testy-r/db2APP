const db = require('./database');
const Benutzer = require('./models/Benutzer');
const Sequelize = require('sequelize');
const BenutzerSchema = Benutzer(db, Sequelize.DataTypes);

exports.isAdmin = async (req, res, next) => {
    const benutzer_ID = req.param('Benutzer_ID');
    if(benutzer_ID) {
        let user = await BenutzerSchema.findByPk(benutzer_ID);

        if(user && user.BenutzerLevel == 1 ) {
            next();
        } else {
            res.send({
                statusCode: 403,
                message: "Your not allowed to do that action"
            });
        }
    } else {
        res.send({
            statusCode: 403,
            message: "You need to login first"
        });
    }

};
