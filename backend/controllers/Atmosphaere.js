const db = require('../database');
const ATMOSPHAERE = require('../models/Atmosphaere');
const Sequelize = require('sequelize');


const Atmosphaere = ATMOSPHAERE(db, Sequelize.DataTypes);



exports.getAtmosphaere = async (req, res, next) => {
    const atmosphaereId = req.param('atmosphaereId');
    let atmosphaere = await Atmosphaere.findByPk(atmosphaereId);
    res.send(atmosphaere);
};

exports.getAtmosphaeres = async (req, res, next) => {
    let atmosphaeres = await Atmosphaere.findAll();
    res.send(atmosphaeres);
};