const db = require('../database');
const STOFF = require('../models/Stoff');
const Sequelize = require('sequelize');


const Stoff = STOFF(db, Sequelize.DataTypes);



exports.getStoff = async (req, res, next) => {
    const stoffId = req.param('stoffId');
    let stoff = await Stoff.findByPk(stoffId);
    res.send(planet);
};

exports.getStoffs = async (req, res, next) => {
    let stoffs = await Stoff.findAll();
    res.send(stoffs);
};