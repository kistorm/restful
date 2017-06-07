/**
 * Created by user on 2017/5/22.
 */
var path = require('path');
exports.root = path.join(__dirname, "..");
exports.upload = path.join(__dirname, "..","upload");
exports.logs = {
    all:path.resolve(__dirname,"..","./logs/all.log"),
    errors:path.resolve(__dirname,"..","./logs/errors.log"),
    warn:path.resolve(__dirname,"..","./logs/warn.log"),
    exceptions:path.resolve(__dirname,"..","./logs/exceptions.log"),
    db:path.resolve(__dirname,"..","./logs/db.log")
};