const express = require('express');
const router = express.Router();
const auth = require('../auth');

const planetCtrl = require('../controllers/PLANET');

router.get('/Planet/:planetId', planetCtrl.getPlanet);
router.get('/Planets', planetCtrl.getPlanets);
router.post('/Planet', planetCtrl.updatePlanet);

//Das hier mit authentisierung
//router.delete('/Planet/:Benutzer_ID?', auth.isAdmin, planetCtrl.deletePlanet);


router.delete('/Planet/:Planet_ID', planetCtrl.deletePlanet);
router.put('/Planet', planetCtrl.createPlanet);
module.exports = router;
