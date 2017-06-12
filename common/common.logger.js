/**
 * Created by user on 2017/6/6.
 */
var winston = require('winston');
var dailyRotateFile = require('winston-daily-rotate-file');
var moment = require('moment');
var logs = require('../conf/conf.dirs.js').logs;
var dateFormat = function () {
    return moment().format('YYYY-MM-DD HH:mm:ss:SSS');
}
var ignoreEpipe = function (err) {
    return err.code !== 'EPIPE';
} 
var allLoggerTransport = new dailyRotateFile({
    name: 'all',
    filename:logs.all,
    level: 'info',
    colorize: true,
    maxsize: 1024 * 1024 * 6,
    datePattern: '.yyyy-MM-dd',
    zippedArchive: true
});
var errorTransport = new dailyRotateFile({
    name: 'error',
    filename: logs.errors,
    timestamp: dateFormat,
    maxsize: 1024 * 1024 * 6,
    level: 'error',
    colorize: true
});
var warnTransport = new dailyRotateFile({
    name: 'warn',
    filename: logs.warn,
    maxsize: 1024 * 1024 * 6,
    timestamp: dateFormat,
    level: 'warn',
    colorize: true
});
var exceptionTransport = new winston.transports.File({
    handleExceptions: true,
    json: true,
    filename:logs.exceptions

})
var dbLoggerTransport = new dailyRotateFile({
    name: 'db',
    filename: logs.db,
    timestamp: dateFormat,
    level: 'info',
    colorize: true,
    maxsize: 1024 * 1024 * 6,
    datePattern: '.yyyy-MM-dd',
    zippedArchive: true
});

var logger = new winston.Logger({
    transports: [allLoggerTransport, warnTransport, errorTransport],
    exceptionHandlers: [exceptionTransport],
    exitOnError: ignoreEpipe
});
logger.dbLogger = new winston.Logger();
logger.dbLogger.add(dbLoggerTransport, {}, true);
logger.dbLogger.add(allLoggerTransport, {}, true);
logger.dbLogger.add(errorTransport, {}, true);


//logger.info('Hello World info !');
//logger.error('Hello World error !');
//logger.warn('Hello World warn !');
//logger.dbLogger.info('Hello World!');
//logger.dbLogger.error('Hello World!');
//throw new Error("xx");
exports.logger = logger;