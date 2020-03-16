const express = require('express');
const LifeCtrl = require('../controller/lifecare-ctrl');

const router = express.Router();

// router.post('/locationCreate', LifeCtrl.createLocation);
router.get('/location', LifeCtrl.getLocation);


module.exports = router;