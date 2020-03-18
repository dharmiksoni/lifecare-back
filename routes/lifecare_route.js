const express = require('express');
const LifeCtrl = require('../controller/lifecare-ctrl');

const router = express.Router();
console.log("inside routes")
// router.post('/locationCreate', LifeCtrl.createLocation);
router.post('/location', LifeCtrl.getLocation);


module.exports = router;