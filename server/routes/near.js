const express = require('express');
const router = express.Router();

const nearCtrl = require('../controllers/near');

router.post('/index',nearCtrl.index);

module.exports = router;