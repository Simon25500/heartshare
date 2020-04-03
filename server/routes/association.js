const express = require('express');
const router = express.Router();

const associationCtrl = require('../controllers/association');

router.get('/index', associationCtrl.index);

module.exports = router;