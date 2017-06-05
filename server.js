'use strict';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('bpetapi:server');
var http = require('http');
var app = express();

var util = require('./common').util;
var mount = require('./api').routes;

var normalizePort = function (val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        return port;
    }

    return false;
}
var onError = function (error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;

    }
}
var onListening = function () {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
var filter404 = function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    err.msg = 404;
    err.result = 404;
    //next(err);
    res.send(err);
}
var env = function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.send('error');
}

var serverport = require('./conf').system.serverport;
var port = normalizePort(process.env.PORT || serverport);
app.use(logger('dev')).use(bodyParser.json()).use(bodyParser.urlencoded({extended: false})).use(cookieParser());
mount(app);
app.use(filter404).use(env).set('port', port);
var server = http.createServer(app);
server.listen(port);
server.on('error', onError)
    .on('listening', onListening);
util.init();