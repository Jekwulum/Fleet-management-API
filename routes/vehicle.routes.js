const router = require('express').Router();
const AppService = require('../middlewares/services/app.service');
const VehicleController = require('../controllers/vehicle.controllers');

router.get('/', VehicleController.get);

router.post('/', VehicleController.createVehicle);

router.patch('/:id', AppService.formatUpdateQuery, VehicleController.updateVehicle);

module.exports = router;