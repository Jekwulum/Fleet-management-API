const getVehicleByIDQuery = `SELECT * FROM vehicle where vehicle_id = $1`;

const getVehiclesQuery = `SELECT * FROM vehicle`;

const createVehicleQuery = `INSERT INTO 
                          vehicle (vehicle_id, model, license_plate, fuel_capacity, purchase_date, is_active)
                          values ($1, $2, $3, $4, $5, $6) RETURNING *`;

const updateVehicleQuery = setter => `UPDATE vehicle ${setter} WHERE vehicle_id = $1 RETURNING *`;

module.exports = { createVehicleQuery, getVehiclesQuery, getVehicleByIDQuery, updateVehicleQuery };