const db = require('../database');
const ZWERGPLANET = require('../models/ZWERGPLANET');
const Sequelize = require('sequelize');


const Zwergplanet = ZWERGPLANET(db, Sequelize.DataTypes);



exports.getZwergplanet = async (req, res, next) => {
    const zwergplanetId = req.param('zwergplanetId');
    let zwergplanet = await Zwergplanet.findByPk(planetId);
    res.send(planet);
};

exports.getZwergplanets = async (req, res, next) => {
    let zwergplanets = await Zwergplanet.findAll();
    res.send(zwergplanets);
};