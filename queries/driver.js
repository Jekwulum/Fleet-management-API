const getDriversQuery = `SELECT * FROM driver`;

const getDriverByID = `SELECT * FROM driver WHERE driver_id = $1`;

module.exports = {
  getDriversQuery, getDriverByID
}