const express = require('express');
const router = express.Router();

const eventCtrl = require('../controllers/event');

router.get('/index', eventCtrl.index);
router.post('/near', eventCtrl.near);

module.exports = router;