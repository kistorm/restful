/**
 * Created by user on 2017/5/22.
 */
var packages = {}, dependencies = Object.keys(require("../package.json").dependencies);
dependencies.forEach(function (key) {
    packages[key] = require(key);
});
packages["path"] = require('path');
packages["url"] = require('url');
packages["fs"] = require('fs');
exports.package = packages;