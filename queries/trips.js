const getTripsQuery = `SELECT * FROM trips`;

const getTripByIDQuery = `SELECT * FROM trips WHERE trip_id = $1`;

const createTripQuery = `INSERT INTO 
                          trips (trip_id, vehicle_id, driver_id, start_location, end_location, distance, trip_date)
                          values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;  

module.exports = {
  getTripsQuery, getTripByIDQuery, createTripQuery
};