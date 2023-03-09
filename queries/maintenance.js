const getMaintenancesQuery = `SELECT * FROM maintenance`;

const createMaintenanceQuery = `INSERT INTO 
                                maintenance (maintenance_id, vehicle_id, maintenance_date, parts_used, cost)
                                values ($1, $2, $3, $4, $5) RETURNING *`;         

module.exports = {
  getMaintenancesQuery, createMaintenanceQuery
};