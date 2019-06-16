const express = require('express');
const router = express.Router();

const MondCtrl = require('../controllers/MOND');

router.get('/Mond', MondCtrl.getMond) ;
router.get('/Monds', MondCtrl.getMonds) ;

module.exports = router;
