const PoolConnector = require('../middlewares/services/connector.service');
const { databaseError } = require('../middlewares/helpers/responses/database.responses');
const generateUUID = require('../middlewares/utils/generateUUID');
const { getMaintenancesQuery, createMaintenanceQuery, getMaintenancesByLicensePlateQuery,
  getMaintenanceByIDQuery, updateMaintenanceQuery, deleteMaintenanceQuery } = require('../queries/maintenance');

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

  getMaintenanceByID: async (req, res) => {
    PoolConnector.query(getMaintenanceByIDQuery, [req.params.id], async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched maintenance data", data: results.rows[0], status: 'SUCCESS' });
    });
  },

  getMaintenanceByLicensePlate: async (req, res) => {
    PoolConnector.query(getMaintenancesByLicensePlateQuery, [req.params.license_plate], async (err, results) => {
      if (err) {
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

  updateMaintenance: async (req, res) => {
    console.log(res.locals.query);
    console.log('-------------')
    PoolConnector.query(updateMaintenanceQuery(res.locals.query), [req.params.id], async (err, results) => {
      if (err) {
        console.log(err);
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ status: "SUCCESS", message: "Successfully updated maintenance data", data: results.rows[0] });
    });
  },

  deleteMaintenance: async (req, res) => {
    PoolConnector.query(deleteMaintenanceQuery, [req.params.id], async (err) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ status: "SUCCESS", message: "Successfully deleted maintenance data" });
    });
  }
};

module.exports = MaintenanceController;