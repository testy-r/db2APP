const express = require('express');
const router = express.Router();

const stoffCtrl = require('../controllers/Stoff');

router.get('/Stoff', stoffCtrl.getStoff) ;
router.get('/Stoffs', stoffCtrl.getStoffs) ;

module.exports = router;
