const router = require('express').Router();
const AppService = require('../middlewares/services/app.service');
const MaintenanceController = require('../controllers/maintenance.controller');

router.get('/', MaintenanceController.get);

module.exports = router;