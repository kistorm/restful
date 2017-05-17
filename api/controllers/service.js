/**
 * Created by user on 2017/5/5.
 */
var instance = require('../../db').crud;
module.exports = function (modelName) {
    var newInstance = new instance(modelName);
    var server = function () {
    };
    server.get = newInstance.acquire;
    server.post = newInstance.create;
    server.list = newInstance.list;
    server.put = newInstance.update;
    server.delete = newInstance.destory;
    return server;
}