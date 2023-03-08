const PoolConnector = require('../middlewares/services/connector.service');
const { databaseError } = require('../middlewares/helpers/responses/database.responses');
const generateUUID = require('../middlewares/utils/generateUUID');
const { createVehicleQuery, getVehiclesQuery, updateVehicleQuery } = require('../queries/vehicle');

const VehicleController = {
  get: async (req, res) => {
    PoolConnector.query(getVehiclesQuery, async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched vehicles", data: results.rows, status: 'SUCCESS' });
    });
  },

  createVehicle: async (req, res) => {
    const vehicle_id = generateUUID();
    const { license_plate, fuel_capacity, model } = req.body;
    const is_active = req.body.is_active ? true : false;
    const purchase_date = new Date(req.body.purchase_date);

    PoolConnector.query(createVehicleQuery, [vehicle_id, model, license_plate, fuel_capacity, purchase_date, is_active], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully added vehicle", data: results.rows[0], status: 'SUCCESS' });
    });
  },

  updateVehicle: async (req, res) => {
    PoolConnector.query(updateVehicleQuery(res.locals.query), [req.params.id], async (err, results) => {
      if (err) {
        console.log(err);
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ status: "SUCCESS", message: "Successfully updated vehicle", data: results.rows[0] });
    });
  }
};

module.exports = VehicleController;