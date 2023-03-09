const getDriversQuery = `SELECT * FROM driver`;

const getDriverByID = `SELECT * FROM driver WHERE driver_id = $1`;

const createDriverQuery = `INSERT INTO
                            driver (driver_id, first_name, last_name, email, phone, is_active)
                            values ($1, $2, $3, $4, $5, $6) RETURNING *`;

const updateDriverQuery = setter => `UPDATE driver ${setter} WHERE driver_id = $1 RETURNING *`;

module.exports = {
  getDriversQuery, getDriverByID, createDriverQuery,
  updateDriverQuery
}