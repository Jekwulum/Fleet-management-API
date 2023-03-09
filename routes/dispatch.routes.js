const router = require('express').Router();
const AppService = require('../middlewares/services/app.service');
const DispatchController = require('../controllers/dispatch.controller');

router.get('/', DispatchController.get);

router.post('/', DispatchController.createDispatch);

module.exports = router;