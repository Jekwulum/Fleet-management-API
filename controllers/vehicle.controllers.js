const PoolConnector = require('../middlewares/services/connector.service');

const VehicleController = {
  get: async (req, res) => {
    PoolConnector.query('SELECT * FROM vehicle', (err, results) => {
      if (err) throw err;
      res.status(200).json({ message: "sent", data: results.rows });
    });
  }
};

module.exports = VehicleController;