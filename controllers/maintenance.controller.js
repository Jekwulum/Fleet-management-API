const PoolConnector = require('../middlewares/services/connector.service');
const { databaseError } = require('../middlewares/helpers/responses/database.responses');
const generateUUID = require('../middlewares/utils/generateUUID');
const { getMaintenancesQuery } = require('../queries/maintenance');

const MaintenanceController = {
  get: async (req, res) => {
    PoolConnector.query(getMaintenancesQuery, async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched maintenances data", data: results.rows, status: 'SUCCESS' });
    })
  }
};

module.exports = MaintenanceController;