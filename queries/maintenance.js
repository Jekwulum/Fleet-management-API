const getMaintenancesQuery = `SELECT * FROM maintenance`;

const getMaintenanceByIDQuery = `SELECT M.*, V.license_plate FROM maintenance M 
                                  INNER JOIN vehicle V ON M.vehicle_id = V.vehicle_id
                                  WHERE maintenance_id = $1`;

const getMaintenancesByLicensePlateQuery = `SELECT M.*, V.license_plate FROM maintenance M 
                                            INNER JOIN vehicle V ON M.vehicle_id = V.vehicle_id
                                            WHERE V.license_plate = $1`;

const createMaintenanceQuery = `INSERT INTO 
                                maintenance (maintenance_id, vehicle_id, maintenance_date, parts_used, cost)
                                values ($1, $2, $3, $4, $5) RETURNING *`;

module.exports = {
  getMaintenancesQuery, createMaintenanceQuery, getMaintenancesByLicensePlateQuery,
  getMaintenanceByIDQuery
};