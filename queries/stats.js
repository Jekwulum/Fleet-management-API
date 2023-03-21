const getDriversCountQuery = "SELECT COUNT(driver_id) FROM driver";

const getActiveDriversCountQuery = `SELECT COUNT(driver_id) FROM driver WHERE is_active = true`;

const getTripsCountQuery = "SELECT COUNT(trip_id) FROM trips";

const getVehiclesCountQuery = "SELECT COUNT(vehicle_id) FROM vehicle";

const getActiveVehiclesCountQuery = `SELECT COUNT(vehicle_id) FROM vehicle WHERE is_active = true`;

const getTripsStatsQuery = `SELECT SUM(distance) as distance, COUNT(trip_date), trip_date AS date FROM trips GROUP BY trip_date`;

module.exports = {
  getDriversCountQuery, getActiveDriversCountQuery, getActiveVehiclesCountQuery,
  getVehiclesCountQuery, getTripsCountQuery, getTripsStatsQuery
};