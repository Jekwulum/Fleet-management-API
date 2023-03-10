const PoolConnector = require('../middlewares/services/connector.service');
const { databaseError } = require('../middlewares/helpers/responses/database.responses');
const generateUUID = require('../middlewares/utils/generateUUID');
const { getTripsQuery, getTripByIDQuery, createTripQuery,
  getTripsByDriverEmailQuery, getTripsByDriverPhoneQuery, updateTripQuery } = require('../queries/trips');

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

  getTripsByDriverEmail: async (req, res) => {
    PoolConnector.query(getTripsByDriverEmailQuery, [req.params.email], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched trip data", data: results.rows, status: 'SUCCESS' });
    });
  },

  getTripsByDriverPhone: async (req, res) => {
    PoolConnector.query(getTripsByDriverPhoneQuery, [req.params.phone], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched trip data", data: results.rows, status: 'SUCCESS' });
    });
  },

  createTrip: async (req, res) => {
    const trip_id = generateUUID();
    const { vehicle_id, driver_id, start_location, end_location, distance } = req.body;
    const trip_date = req.body.trip_date ? new Date(req.body.trip_date) : new Date();

    PoolConnector.query(createTripQuery, [trip_id, vehicle_id, driver_id, start_location, end_location, distance, trip_date], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully added trip", data: results.rows[0], status: 'SUCCESS' });
    });
  },

  updateTrip: async (req, res) => {
    PoolConnector.query(updateTripQuery(res.locals.query), [req.params.id], async (err, results) => {
      if (err) {
        console.log(err);
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ status: "SUCCESS", message: "Successfully updated trip data", data: results.rows[0] });
    });
  },
};

module.exports = TripController;