const PoolConnector = require('../middlewares/services/connector.service');
const { databaseError } = require('../middlewares/helpers/responses/database.responses');
const { getActiveDriversCountQuery, getActiveVehiclesCountQuery, getTripsCountQuery,
  getDriversCountQuery, getVehiclesCountQuery, getTripsStatsQuery } = require('../queries/stats');

const StatsController = {
  getStats: async (req, res) => {
    try {
      Promise.all([
        PoolConnector.query(getDriversCountQuery),
        PoolConnector.query(getActiveDriversCountQuery),
        PoolConnector.query(getVehiclesCountQuery),
        PoolConnector.query(getActiveVehiclesCountQuery),
        PoolConnector.query(getTripsCountQuery),
        PoolConnector.query(getTripsStatsQuery)
      ]).then(results => {
        const data = {
          drivers: { count: results[0]["rows"][0]["count"], active: results[1]["rows"][0]["count"] },
          vehicles: { count: results[2]["rows"][0]["count"], active: results[3]["rows"][0]["count"] },
          trips: { count: results[4]["rows"][0]["count"], stats: results[5]["rows"] }
        };
        res.status(200).json({ status: "SUCCESS", message: "succesfully fetched stats", data });
      })
    } catch (error) {
      const response = databaseError(err);
      res.status(response.status).json({ status: response.type, message: response.message });
    }
  }
};

module.exports = StatsController;