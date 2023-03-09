const router = require('express').Router();
const AppService = require('../middlewares/services/app.service');
const DispatchController = require('../controllers/dispatch.controller');

router.get('/', DispatchController.get);

router.get('/email/:email', DispatchController.getDispatchesByDriverEmail);

router.get('/phone/:phone', DispatchController.getDispatchesByDriverPhone);

router.post('/', DispatchController.createDispatch);

router.patch('/:id', AppService.formatUpdateQuery, DispatchController.updateDispatch);

router.delete('/:id', DispatchController.deleteDispatch);

module.exports = router;