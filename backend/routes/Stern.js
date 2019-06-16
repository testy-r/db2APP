const express = require('express');
const router = express.Router();

const sternCtrl = require('../controllers/Stern');

router.get('/Stern', sternCtrl.getStern) ;
router.get('/Sterns', sternCtrl.getSterns) ;
module.exports = router;
