const winston = require("winston");
const { createLogger, format, transports } = winston;
const { combine, colorize, timestamp, printf } = format;
const logLevel = 'debug';

const myFormat = printf(({ level, message, label, timestamp }) => {
    const ts = timestamp.slice(0, 19).replace('T', ' ');
    return `[${ts}] ${level}: ${message}`;
});

winston.addColors({
    error: 'red',
    warn: 'yellow',
    info: 'cyan',
    debug: 'green'
});

const options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
    console: {
        // format: winston.format.simple(),
        format: combine(
            timestamp(),
            colorize(),
            myFormat
        ),
        level: logLevel,
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

const logger = createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new transports.File({ filename: `${options.file.filename}error.log`, level: 'error' }),
        new transports.File({ filename: `${options.file.filename}app.log` }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console(options.console));
}

module.exports = logger;
