const express = require('express');
const router = express.Router();

const updateCtrl = require('../controllers/update');

router.get('/update', updateCtrl.update);

module.exports = router;