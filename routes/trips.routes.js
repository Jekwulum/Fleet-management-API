const router = require('express').Router();
const TripController = require('../controllers/trips');

router.get('/', TripController.get);

router.get('/:id', TripController.getTripByID);

router.get('/email/:email', TripController.getTripsByDriverEmail);

router.get('/phone/:phone', TripController.getTripsByDriverPhone);

router.post('/', TripController.createTrip);

module.exports = router;