const getTripsQuery = `SELECT * FROM trips`;
const getTripByIDQuery = `SELECT * FROM trips WHERE trip_id = $1`;

module.exports = {
  getTripsQuery, getTripByIDQuery
};