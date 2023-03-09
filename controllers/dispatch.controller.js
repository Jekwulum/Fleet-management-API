const PoolConnector = require('../middlewares/services/connector.service');
const { databaseError } = require('../middlewares/helpers/responses/database.responses');
const generateUUID = require('../middlewares/utils/generateUUID');
const { getDispatchesQuery } = require('../queries/dispatch');

const DispatchCOntroller = {
  get: async (req, res) => {
    PoolConnector.query(getDispatchesQuery, async (err, results) => {
      if (err) {
        const response = databaseError(err);
        return res.status(response.status).json({ status: response.type, message: response.message });
      };
      res.status(200).json({ message: "Successfully fetched dispatches", data: results.rows, status: 'SUCCESS' });
    });
  }
};

module.exports = DispatchCOntroller;