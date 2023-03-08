require('dotenv').config();

const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const driverRouter = require('./routes/driver.routes');
const maintenanceRouter = require('./routes/maintenance.routes');
const vehicleRouter = require('./routes/vehicle.routes');


const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Accept", "application/json");
    res.header("Access-Control-Allow-Credentials", 'true');
    next();
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => res.status(200).json({ message: "working" }));
app.use('/api/driver', driverRouter);
app.use('/api/maintenance', maintenanceRouter);
app.use('/api/vehicle', vehicleRouter);

module.exports = app;