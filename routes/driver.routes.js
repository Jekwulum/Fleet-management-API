const router = require('express').Router();
const DriverController = require('../controllers/driver.controller');

router.get('/drivers',
  (req, res) => DriverController.get(req, res)
);

module.exports = router;