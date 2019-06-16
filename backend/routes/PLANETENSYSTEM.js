const express = require('express');
const router = express.Router();

const planetensystemCtrl = require('../controllers/PLANETENSYSTEM');

router.get('/Planetensystem/:planetensystemId', planetensystemCtrl.getPlanetensystem) ;
router.get('/Planetensystems', planetensystemCtrl.getPlanetensystems) ;


module.exports = router;
