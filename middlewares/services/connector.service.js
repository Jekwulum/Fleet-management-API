const Pool = require('pg').Pool;
const config = require('../enums/configs.enums');
const logger = require('../utils/logger');
const PoolConnector = new Pool(config);

PoolConnector.query("SELECT NOW();", error => {
    if (error) logger.error(`Connection to ${appName}'s database. [Issue]: ${error}`);
    else logger.info(`[Database connection]: Connected correctly to ${appName} database`);
});

module.exports = PoolConnector;