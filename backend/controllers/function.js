const db = require('../database');
const Sequelize = require('sequelize');


exports.fk_HabitableZone = (req, res, next) => {
    db.query('SELECT fk_HabitableZone(Planet_ID) FROM PLANET;').then(result => {
        res.send(result);
    })
};
