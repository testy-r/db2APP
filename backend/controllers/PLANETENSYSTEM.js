const db = require('../database');
const PLANETENSYSTEM = require('../models/PLANETENSYSTEM');
const Sequelize = require('sequelize');


const Planetensystem = PLANETENSYSTEM(db, Sequelize.DataTypes);



exports.getPlanetensystem = async (req, res, next) => {
    const planetensystemId = req.param('planetensystemId');
    let planetensystem = await Planetensystem.findByPk(planetensystemId);
    res.send(planetensystem);
};

exports.getPlanetensystems = async (req, res, next) => {
    let planetensystems = await Planetensystem.findAll();
    res.send(planetensystems);
};