const express = require('express');
const router = express.Router();

const missionCtrl = require('../controllers/mission');

router.get('/index', missionCtrl.index);
router.post('/near', missionCtrl.near);

module.exports = router;