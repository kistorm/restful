/**
 * Created by kistorm on 2017/6/5.
 */
var data = require('./data');
var CRUD = require('./index.js').crud;
var baseinfo = new CRUD("example");
exports.init = function (callback) {
    callback = function (err, result) {
    };
    var sqlParams = {
        sql: "truncate table `example` ",
        keys: [],
        modelName: ""
    }
    baseinfo.queryBySQL(sqlParams, function (err, result) {
        if (!err) baseinfo.create(data, callback);
        return callback(err, result);
    })
}