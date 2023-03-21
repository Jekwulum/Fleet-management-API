const getDriversCountQuery = "SELECT COUNT(driver_id) FROM driver";

const getActiveDriversCountQuery = `SELECT COUNT(driver_id) FROM driver WHERE is_active = true`;

const getVehiclesCountQuery = "SELECT COUNT(vehicle_id) FROM vehicle";

const getActiveVehiclesCountQuery = `SELECT COUNT(vehicle_id) FROM vehicle WHERE is_active = true`;

module.exports = {
  getDriversCountQuery, getActiveDriversCountQuery, getActiveVehiclesCountQuery,
  getVehiclesCountQuery
};