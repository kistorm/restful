/**
 * Created by user on 2017/5/5.
 */
var _ = require('lodash'), fs = require('fs'), path = require('path');
var mergeParams = function (req) {
    var queryParams = req.query;
    var bodyParams = req.body;
    var variantsParams = req.params;
    var __ = _.assign(queryParams, bodyParams, variantsParams);
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
var init = function () {
    var path_log = path.resolve(__dirname, "..", "logs");
    var path_log_json = path.resolve(path_log, "run.json");
    var env_package = {};
    if (!fs.existsSync(path_log)) {
        fs.mkdirSync(path_log);
    } else {
        env_package = fs.existsSync(path_log_json) ? require(path_log_json) : {};
    }
    if (!env_package || !env_package.run) {
        var sequelize = require('../db/').instance.sequelize;
        var script = require('../db/db.script.js');
        sequelize.sync({force: true, logging: console.error})
            .then(function () {
                env_package.run = {
                    total: 1,
                    first_time: new Date(),
                    latest_time: new Date(),
                    run_time: [new Date()]
                };
                fs.writeFileSync(path_log_json, JSON.stringify(env_package));
                script.init(function (err) {
                    console.log(err ? "strut sync fail" : "strut sync success", err);
                });
            })
            .catch(function (err) {
                console.log(err);
            })
    } else {
        env_package.run.total += 1;
        env_package.run.run_time.push(new Date());
        env_package.run.latest_time = new Date();
        fs.writeFileSync(path_log_json, JSON.stringify(env_package));
        console.log("strut sync success");
    }
}

var mergerExport = function (dir) {
    var dirs = fs.readdirSync(dir), obj = {};
    _.each(dirs, function (d) {
        if (d != "index.js") {
            _.assign(obj, require(path.join(dir, d)));
        }
    })
    return obj;
}

exports.util = {
    nonNegativeInteger: nonNegativeInteger,
    mergeParams: mergeParams,
    response_overwrite: response_overwrite,
    callback_pre_exec: callback_pre_exec,
    init: init,
    mergerExport: mergerExport
}
