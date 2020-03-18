const express = require('express');
const LifeCtrl = require('../controller/lifecare-ctrl');

const router = express.Router();
// console.log("inside routes")
// router.post('/locationCreate', LifeCtrl.createLocation);

router.get('/location', LifeCtrl.getLocation);
// router.get('/listLocation', LifeCtrl.allLocation);


module.exports = router;