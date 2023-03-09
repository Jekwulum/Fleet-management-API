const PoolConnector = require('../middlewares/services/connector.service');
const { databaseError } = require('../middlewares/helpers/responses/database.responses');
const generateUUID = require('../middlewares/utils/generateUUID');
const { getMaintenancesQuery, createMaintenanceQuery, getMaintenanceByLicensePlateQuery } = require('../queries/maintenance');

const MaintenanceController = {
  get: async (req, res) => {
    PoolConnector.query(getMaintenancesQuery, async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched maintenances data", data: results.rows, status: 'SUCCESS' });
    })
  },

  getMaintenanceByLicensePlate: async (req, res) => {
    PoolConnector.query(getMaintenanceByLicensePlateQuery, [req.params.license_plate], async (err, results) => {
      if (err) {
        console.log(err);
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched maintenance data", data: results.rows, status: 'SUCCESS' });
    });
  },

  createMaintenance: async (req, res) => {
    const maintenance_id = generateUUID();
    const { vehicle_id, maintenance_date, parts_used, cost } = req.body;

    PoolConnector.query(createMaintenanceQuery, [maintenance_id, vehicle_id, maintenance_date, parts_used, cost], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        console.log(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully added maintenance data", data: results.rows[0], status: 'SUCCESS' });
    });
  },
};

module.exports = MaintenanceController;