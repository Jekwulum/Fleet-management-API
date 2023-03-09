const router = require('express').Router();
const AppService = require('../middlewares/services/app.service');
const DriverController = require('../controllers/driver.controller');

router.get('/', DriverController.get);

router.get('/:id', DriverController.getDriverByID);

router.get('/email/:email', DriverController.getDriverByEmail);

router.get('/phone/:phone', DriverController.getDriverByPhone);

router.post('/', DriverController.createDriver);

router.patch('/:id', AppService.formatUpdateQuery, DriverController.updateDriver);

router.delete('/:id', DriverController.deleteDriver);

module.exports = router;