const router = require('express').Router();
const AppService = require('../middlewares/services/app.service');
const MaintenanceController = require('../controllers/maintenance.controller');

router.get('/', MaintenanceController.get);

router.get('/:id', MaintenanceController.getMaintenanceByID);

router.get('/license-plate/:license_plate', MaintenanceController.getMaintenanceByLicensePlate);

router.post('/', MaintenanceController.createMaintenance);

router.patch('/:id', AppService.formatUpdateQuery, MaintenanceController.updateMaintenance);

router.delete('/:id', MaintenanceController.deleteMaintenance);

module.exports = router;