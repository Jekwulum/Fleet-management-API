const PoolConnector = require('../middlewares/services/connector.service');
const { databaseError } = require('../middlewares/helpers/responses/database.responses');
const generateUUID = require('../middlewares/utils/generateUUID');
const { getDriversQuery, getDriverByID, createDriverQuery, getDriverByPhoneQuery,
  updateDriverQuery, deleteDriverQuery, getDriverByEmailQuery, } = require('../queries/driver')

const DriverController = {
  get: async (req, res) => {
    PoolConnector.query(getDriversQuery, async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched drivers data", data: results.rows, status: 'SUCCESS' });
    });
  },

  getDriverByID: async (req, res) => {
    PoolConnector.query(getDriverByID, [req.params.id], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched driver data", data: results.rows[0], status: 'SUCCESS' });
    });
  },

  getDriverByEmail: async (req, res) => {
    PoolConnector.query(getDriverByEmailQuery, [req.params.email], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched driver data", data: results.rows[0], status: 'SUCCESS' });
    });
  },

  createDriver: async (req, res) => {
    const driver_id = generateUUID();
    const { first_name, last_name, email, phone } = req.body;
    const is_active = req.body.is_active ? true : false;

    PoolConnector.query(createDriverQuery, [driver_id, first_name, last_name, email, phone, is_active], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully added driver", data: results.rows[0], status: 'SUCCESS' });
    });
  },

  updateDriver: async (req, res) => {
    PoolConnector.query(updateDriverQuery(res.locals.query), [req.params.id], async (err, results) => {
      if (err) {
        console.log(err);
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ status: "SUCCESS", message: "Successfully updated driver data", data: results.rows[0] });
    });
  },

  deleteDriver: async (req, res) => {
    PoolConnector.query(deleteDriverQuery, [req.params.id], async (err) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ status: "SUCCESS", message: "Successfully deleted driver data" });
    });
  }
};

module.exports = DriverController;