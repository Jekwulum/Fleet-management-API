const getDispatchesQuery = `SELECT 
                              DI.dispatch_id, DI.vehicle_id, V.model, 
                              DR.driver_id, DR.first_name, DR.last_name, DR.phone, Dr.email
                              FROM dispatch DI 
                              INNER JOIN vehicle V ON DI.vehicle_id = V.vehicle_id
                              INNER JOIN driver DR ON DI.driver_id = DR.driver_id`;

const getDispatchesByDriverEmailQuery = `SELECT 
                              DI.dispatch_id, DI.vehicle_id, V.model, 
                              DR.driver_id, DR.first_name, DR.last_name, DR.phone, Dr.email
                              FROM dispatch DI 
                              INNER JOIN vehicle V ON DI.vehicle_id = V.vehicle_id
                              INNER JOIN driver DR ON DI.driver_id = DR.driver_id
                              WHERE DR.email = $1`;

const createDispatchQuery = `INSERT INTO
                              dispatch (dispatch_id, vehicle_id, driver_id)
                              values ($1, $2, $3) RETURNING *`;

module.exports = {
  getDispatchesQuery, createDispatchQuery, getDispatchesByDriverEmailQuery
}