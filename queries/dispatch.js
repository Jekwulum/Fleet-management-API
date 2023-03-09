const getDispatchesQuery = `SELECT * FROM dispatch`;

const createDispatchQuery = `INSERT INTO
                              dispatch (dispatch_id, vehicle_id, driver_id)
                              values ($1, $2, $3) RETURNING *`;

module.exports = {
  getDispatchesQuery, createDispatchQuery
}