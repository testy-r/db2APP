const express = require('express');
const router = express.Router();

const functionCtrl = require('../controllers/function');

router.get('/function/fk_HabitableZone', functionCtrl.fk_HabitableZone) ;

module.exports = router;
