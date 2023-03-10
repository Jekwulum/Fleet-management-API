const router = require('express').Router();
const TripController = require('../controllers/trips');

router.get('/', TripController.get);

router.get('/:id', TripController.getTripByID);

router.post('/', TripController.createTrip);

module.exports = router;