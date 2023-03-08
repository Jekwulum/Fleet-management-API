const PoolConnector = require('../middlewares/services/connector.service');
const generateUUID = require('../middlewares/utils/generateUUID');
const { createVehicleQuery, getVehiclesQuery } = require('../queries/vehicle');

const VehicleController = {
  get: async (req, res) => {
    PoolConnector.query(getVehiclesQuery, async (err, results) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(200).json({ message: "Successfully fetched vehicles", data: results.rows, status: 'SUCCESS' });
    });
  },

  createVehicle: async (req, res) => {
    const vehicle_id = generateUUID();
    const { license_plate, fuel_capacity, model } = req.body;
    const is_active = req.body.is_active ? true : false;
    const purchase_date = new Date(req.body.purchase_date);

    PoolConnector.query(createVehicleQuery, [vehicle_id, model, license_plate, fuel_capacity, purchase_date, is_active], async (err, results) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(200).json({ message: "Successfully added vehicle", data: results.rows[0], status: 'SUCCESS' });
    });
  }
};

module.exports = VehicleController;