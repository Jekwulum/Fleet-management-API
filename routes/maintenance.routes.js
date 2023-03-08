const router = require('express').Router();
const MaintenanceController = require('../controllers/maintenance.controller');

router.get('/maintenances', MaintenanceController.get);

module.exports = router;