const express = require('express');
const router = express.Router();

const atmosphaereCtrl = require('../controllers/Atmosphaere');

router.get('/Atmosphaere', atmosphaereCtrl.getAtmosphaere) ;
router.get('/Atmosphaeres', atmosphaereCtrl.getAtmosphaeres) ;

module.exports = router;
