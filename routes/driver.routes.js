const router = require('express').Router();
const AppService = require('../middlewares/services/app.service');
const DriverController = require('../controllers/driver.controller');

router.get('/',
  (req, res) => DriverController.get(req, res)
);

module.exports = router;