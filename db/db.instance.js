/**
 * Created by kistorm on 2017/4/28.
 */
var fs = require('fs');
var path = require('path');
var util = require("Sequelize").Utils._;
var sequelize = require('./db.connection');
var models_path = path.join(__dirname, './models');




var db = {sequelize: sequelize};
var dirs = fs.readdirSync(models_path) || [];
dirs.forEach(function (dir) {
    // db[modelName] = sequelize.import(path.join(models_path, dir));
    var modelName = dir.substring(0, dir.indexOf('.js'));
    modelName == "index" ? null : util.set(db, modelName, db.sequelize.import(path.join(models_path, dir)));
})
module.exports = db;