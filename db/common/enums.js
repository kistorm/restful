/**
 * Created by user on 2017/5/5.
 */
var callback_pre_exec = function (callback) {
    if (!callback || typeof callback != 'function') {
        callback = function (err, result) {

        };
    }
    return callback;
}
var sqlTypeEnums = {
    SELECT: 'SELECT',
    INSERT: 'INSERT',
    UPDATE: 'UPDATE',
    BULKUPDATE: 'BULKUPDATE',
    BULKDELETE: 'BULKDELETE',
    DELETE: 'DELETE',
    UPSERT: 'UPSERT',
    VERSION: 'VERSION',
    SHOWTABLES: 'SHOWTABLES',
    SHOWINDEXES: 'SHOWINDEXES',
    DESCRIBE: 'DESCRIBE',
    RAW: 'RAW',
    FOREIGNKEYS: 'FOREIGNKEYS'
}
var sequelize = require('../instance/index.js')["sequelize"];

module.exports = {
    callback_pre_exec: callback_pre_exec,
    sqlTypeEnums: sqlTypeEnums,
    sequelize: sequelize
}