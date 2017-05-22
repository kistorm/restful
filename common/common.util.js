/**
 * Created by user on 2017/5/5.
 */
var _ = require('lodash');
var mergeParams = function (req, paramsObject) {
    var queryParams = req.query;
    var bodyParams = req.body;
    var variantsParams = req.params;
    var __ = _.assign(queryParams, bodyParams, variantsParams, paramsObject);
    return __;
}
var nonNegativeInteger = function (n) {
    return (/^(0|[1-9]\d*)$/).test(n);
};
var response = function (res, status, msg, result) {
    var output = {status: status || 200, msg: msg || "", result: result || {}};
    res.send(output);
}
var response_overwrite = function (res, err, result) {
    var status, message;
    if (err) {
        switch (typeof err) {
            case "object":
                status = err.status;
                message = err.message;
                break;
            case  "string":
                status = 500;
                message = err;
                break;
            default:
                status = 500;
                message = "";
                break;
        }
    }
    result = nonNegativeInteger(result) ? undefined : result;
    response(res, status, message, result);
}
var callback_pre_exec = function (callback) {
    if (!callback || typeof callback != 'function') {
        callback = function (err, result) {

        };
    }
    return callback;
}
var watch = function () {
    var run_logs = require('path').resolve(__dirname, "..", "logs", "run.json");
    var env_package = require(run_logs);
    if (!env_package || !env_package.run) {
        var sequelize = require('../db/').instance.sequelize;
        sequelize.sync({force: true, logging: console.error})
            .then(function () {
                env_package.run = {
                    total: 1,
                    first_time: new Date(),
                    latest_time: new Date(),
                    run_time: [new Date()]
                };
                require('fs').writeFile(run_logs, JSON.stringify(env_package));
                console.log("strut sync success");
            })
            .catch(function (err) {
                console.log(err);
            })
    } else {
        env_package.run.total += 1;
        env_package.run.run_time.push(new Date());
        env_package.run.latest_time = new Date();
        require('fs').writeFile(run_logs, JSON.stringify(env_package));
    }
}


exports.util = {
    nonNegativeInteger: nonNegativeInteger,
    mergeParams: mergeParams,
    response_overwrite: response_overwrite,
    callback_pre_exec: callback_pre_exec,
    init: init
}
