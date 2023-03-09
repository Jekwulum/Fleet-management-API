const router = require('express').Router();
const AppService = require('../middlewares/services/app.service');
const DispatchController = require('../controllers/dispatch.controller');

router.get('/', DispatchController.get);

module.exports = router;