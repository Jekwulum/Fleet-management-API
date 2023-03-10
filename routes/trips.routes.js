const router = require('express').Router();
const TripController = require('../controllers/trips');

router.get('/', TripController.get);

module.exports = router;