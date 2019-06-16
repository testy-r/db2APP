const express = require('express');
const router = express.Router();

const zwergplanetCtrl = require('../controllers/ZWERGPLANET');

router.get('/Zwergplanet', zwergplanetCtrl.getZwergplanet) ;
router.get('/Zwergplanets', zwergplanetCtrl.getZwergplanets) ;

module.exports = router;
