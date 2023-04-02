require('dotenv').config();

const configs = {
    DEV_FLEET_DB_CONFIG: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: 5432
    },

    // PROD_FLEET_DB_CONFIG: {
    //     user: process.env.PROD_DB_USER,
    //     host: process.env.PROD_DB_HOST,
    //     database: process.env.PROD_DB_DATABASE,
    //     password: process.env.PROD_DB_PASSWORD,
    //     port: 5432
    // }

    PROD_FLEET_DB_CONFIG: {
        connectionString: process.env.PROD_DB_CONN_STRING, ssl: {
            rejectUnauthorized: false
        }
    }
};

const config = process.env.ENV === "development" ? configs.DEV_FLEET_DB_CONFIG : configs.PROD_FLEET_DB_CONFIG;

module.exports = config;