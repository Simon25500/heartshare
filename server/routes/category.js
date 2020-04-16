const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category');

router.get('/index', categoryCtrl.index);

module.exports = router;