var data = require('./data.json');
var CRUD = require('../index.js').crud;
var baseinfo = new CRUD("example");
exports.init = init = function (callback) {
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