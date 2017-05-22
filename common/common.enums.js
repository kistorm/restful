/**
 * Created by user on 2017/5/22.
 */
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
var terminal = {
    browser:"browser",
    android:"android",
    iOS:"iOS",
    machine:"machine"
}


exports.enums = {
    sqlTypeEnums:sqlTypeEnums,
    terminal:terminal
};