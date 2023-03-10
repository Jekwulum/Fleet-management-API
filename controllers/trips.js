const PoolConnector = require('../middlewares/services/connector.service');
const { databaseError } = require('../middlewares/helpers/responses/database.responses');
const generateUUID = require('../middlewares/utils/generateUUID');
const { getTripsQuery, getTripByIDQuery, createTripQuery } = require('../queries/trips');

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

  createTrip: async (req, res) => {
    const trip_id = generateUUID();
    const { vehicle_id, driver_id, start_location, end_location, distance } = req.body;
    const trip_date = new Date(req.body.trip_date);

    PoolConnector.query(createTripQuery, [trip_id, vehicle_id, driver_id, start_location, end_location, distance, trip_date], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully added trip", data: results.rows[0], status: 'SUCCESS' });
    });
  },
};

module.exports = TripController;