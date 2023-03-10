const PoolConnector = require('../middlewares/services/connector.service');
const { databaseError } = require('../middlewares/helpers/responses/database.responses');
const generateUUID = require('../middlewares/utils/generateUUID');
const { getTripsQuery, getTripByIDQuery } = require('../queries/trips');

const TripController = {
  get: async (req, res) => {
    PoolConnector.query(getTripsQuery, async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched trips data", data: results.rows, status: 'SUCCESS' });
    });
  },

  getTripByID: async (req, res) => {
    PoolConnector.query(getTripByIDQuery, [req.params.id], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched trip data", data: results.rows[0], status: 'SUCCESS' });
    });
  },
};

module.exports = TripController;