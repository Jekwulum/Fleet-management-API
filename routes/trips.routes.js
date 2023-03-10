const router = require('express').Router();
const AppService = require('../middlewares/services/app.service');
const TripController = require('../controllers/trips');

router.get('/', TripController.get);

router.get('/:id', TripController.getTripByID);

router.get('/email/:email', TripController.getTripsByDriverEmail);

router.get('/phone/:phone', TripController.getTripsByDriverPhone);

router.post('/', TripController.createTrip);

router.patch('/:id', AppService.formatUpdateQuery, TripController.updateTrip);

module.exports = router;