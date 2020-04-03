const express = require('express');
const router = express.Router();

const eventCtrl = require('../controllers/event');

router.get('/index', eventCtrl.index);

module.exports = router;