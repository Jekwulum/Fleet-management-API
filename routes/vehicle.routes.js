const router = require('express').Router();
const VehicleController = require('../controllers/vehicle.controllers');

router.get('/', VehicleController.get);

module.exports = router;