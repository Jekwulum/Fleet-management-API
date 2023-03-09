const PoolConnector = require('../middlewares/services/connector.service');
const { databaseError } = require('../middlewares/helpers/responses/database.responses');
const generateUUID = require('../middlewares/utils/generateUUID');
const { getDispatchesQuery, createDispatchQuery, getDispatchesByDriverEmailQuery,
  getDispatchesByDriverPhoneQuery, updateDispatchQuery, deleteDispatchQuery } = require('../queries/dispatch');

const DispatchCOntroller = {
  get: async (req, res) => {
    PoolConnector.query(getDispatchesQuery, async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched dispatches", data: results.rows, status: 'SUCCESS' });
    });
  },

  getDispatchesByDriverEmail: async (req, res) => {
    PoolConnector.query(getDispatchesByDriverEmailQuery, [req.params.email], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched dispatch data", data: results.rows, status: 'SUCCESS' });
    });
  },

  getDispatchesByDriverPhone: async (req, res) => {
    PoolConnector.query(getDispatchesByDriverPhoneQuery, [req.params.phone], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched dispatch data", data: results.rows, status: 'SUCCESS' });
    });
  },

  createDispatch: async (req, res) => {
    const dispatch_id = generateUUID();
    const { driver_id, vehicle_id } = req.body;

    PoolConnector.query(createDispatchQuery, [dispatch_id, vehicle_id, driver_id], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully added dispatch", data: results.rows[0], status: 'SUCCESS' });
    });
  },

  updateDispatch: async (req, res) => {
    PoolConnector.query(updateDispatchQuery(res.locals.query), [req.params.id], async (err, results) => {
      if (err) {
        console.log(err);
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ status: "SUCCESS", message: "Successfully updated dispatch data", data: results.rows[0] });
    });
  },

  deleteDispatch: async (req, res) => {
    PoolConnector.query(deleteDispatchQuery, [req.params.id], async (err) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ status: "SUCCESS", message: "Successfully deleted dispatch data" });
    });
  }
};

module.exports = DispatchCOntroller;