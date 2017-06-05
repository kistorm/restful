/**
 * Created by kistorm on 2017/6/5.
 */

exports.init = function (callback) {
    var data = require('./data');
    var DB_PROCESS = require('./index.js').common;
    var baseinfo = new DB_PROCESS("example");
    var sqlParams = {
        sql: "truncate table `example` ",
        keys: [],
        modelName: ""
    }
    baseinfo.queryBySQL(sqlParams, function (err, result) {
        if (!err) baseinfo.create(data, callback);
        return callback;
    })
}

