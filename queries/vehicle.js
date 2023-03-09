const getVehicleByIDQuery = `SELECT * FROM vehicle WHERE vehicle_id = $1`;

const getVehicleByLicensePlateQuery = `SELECT * FROM vehicle WHERE license_plate = $1`;

const getVehiclesQuery = `SELECT * FROM vehicle`;

const createVehicleQuery = `INSERT INTO 
                          vehicle (vehicle_id, model, license_plate, fuel_capacity, purchase_date, is_active)
                          values ($1, $2, $3, $4, $5, $6) RETURNING *`;                          

const updateVehicleQuery = setter => `UPDATE vehicle ${setter} WHERE vehicle_id = $1 RETURNING *`;

const deleteVehicleQuery = `DELETE FROM vehicle WHERE vehicle_id = $1`;

module.exports = {
  createVehicleQuery, getVehiclesQuery, getVehicleByIDQuery,
  getVehicleByLicensePlateQuery, updateVehicleQuery, deleteVehicleQuery
};