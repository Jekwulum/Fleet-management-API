const router = require('express').Router();
const AppService = require('../middlewares/services/app.service');
const DriverController = require('../controllers/driver.controller');

router.get('/', DriverController.get);

router.get('/:id', DriverController.getDriverByID);

router.post('/', DriverController.createDriver);

module.exports = router;