const express = require('express');
const router = express.Router();

const associationCtrl = require('../controllers/association');

router.get('/index', associationCtrl.index);
router.get('/:id', associationCtrl.show);

module.exports = router;