const router = require('express').Router();
const StatsController = require('../controllers/stats.controllers');

router.get('/', StatsController.getStats);

module.exports = router;