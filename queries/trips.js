const getTripsQuery = `SELECT * FROM trips`;

const getTripByIDQuery = `SELECT * FROM trips WHERE trip_id = $1`;

const createTripQuery = `INSERT INTO 
                          trips (trip_id, vehicle_id, driver_id, start_location, end_location, distance, trip_date)
                          values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

const getTripsByDriverEmailQuery = `SELECT 
                          T.*, DR.first_name, DR.last_name, DR.phone, DR.email
                          FROM trips T
                          INNER JOIN driver DR ON T.driver_id = DR.driver_id
                          WHERE DR.email = $1`;

const getTripsByDriverPhoneQuery = `SELECT 
                          T.*, DR.first_name, DR.last_name, DR.phone, DR.email
                          FROM trips T
                          INNER JOIN driver DR ON T.driver_id = DR.driver_id
                          WHERE DR.phone = $1`;

const updateTripQuery = setter => `UPDATE trips ${setter} WHERE trip_id = $1 RETURNING *`;

const deleteTripQuery = `DELETE FROM trips WHERE trip_id = $1`;

module.exports = {
  getTripsQuery, getTripByIDQuery, createTripQuery,
  getTripsByDriverEmailQuery, getTripsByDriverPhoneQuery, updateTripQuery,
  deleteTripQuery
};