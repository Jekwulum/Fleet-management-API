const router = require('express').Router();
const VehicleController = require('../controllers/vehicle.controllers');

router.get('/vehicles', VehicleController.get);

module.exports = router;