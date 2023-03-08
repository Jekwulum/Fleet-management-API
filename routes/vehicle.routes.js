const router = require('express').Router();
const VehicleController = require('../controllers/vehicle.controllers');

router.get('/', VehicleController.get);

router.post('/', VehicleController.createVehicle);

module.exports = router;