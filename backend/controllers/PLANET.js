const db = require('../database');
const PLANET = require('../models/PLANET');
const Sequelize = require('sequelize');


const Planet = PLANET(db, Sequelize.DataTypes);



exports.getPlanet = async (req, res, next) => {
    const planetId = req.param('planetId');
    let planet = await Planet.findByPk(planetId);
    res.send(planet);
};

exports.getPlanets = async (req, res, next) => {
    let planets = await Planet.findAll();
    res.send(planets);
};

exports.updatePlanet = async (req, res, next) => {
    let planet = await Planet.findByPk(req.body.Planet_ID);
    planet.update({
        PlanetName : req.body.PlanetName,
        Masse: req.body.Masse,
        Durchmesser: req.body.Durchmesser,
        Dichte : req.body.Dichte,
        Aphel : req.body.Aphel,
        Periphel : req.body.Periphel
    }).then(p => {
        res.send(p);
    })
};

exports.deletePlanet = async (req, res, next) => {
    let planets = await Planet.findByPk(req.param('Planet_ID'));
    await planets.destroy();
    res.send({
        status: 200,
        msg: 'delete success'
    })
};

exports.createPlanet = async (req,res,next) => {
    let planet = await Planet.create(req.body);

    res.send({
        status: 200,
        msg: 'created!!!',
        planet : planet,
    })
};
