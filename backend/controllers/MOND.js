const db = require('../database');
const MOND = require('../models/MOND');
const Sequelize = require('sequelize');

const Mond = MOND(db, Sequelize.DataTypes);

exports.getMond = async (req, res, next) => {
  const MondId = req.param('MondId');
  let Mond = await Mond.findByPk(MondId);
  res.send(Mond);
};

exports.getMonds = async (req, res, next) => {
  let Monds = await Mond.findAll();
  res.send(Monds);
};
