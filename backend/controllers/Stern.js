const db = require('../database');
const STERN = require('../models/Stern');
const Sequelize = require('sequelize');


const Stern = STERN(db, Sequelize.DataTypes);



exports.getStern = async (req, res, next) => {
    const sternId = req.param('sternId');
    let stern = await Stern.findByPk(sternId);
    res.send(stern);
};

exports.getSterns = async (req, res, next) => {
    let sterns = await Stern.findAll();
    res.send(sterns);
};