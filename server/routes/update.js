const express = require('express');
const router = express.Router();

const updateCtrl = require('../controllers/update');

router.get('/update', updateCtrl.update);
router.get('/delete', updateCtrl.delete);

module.exports = router;