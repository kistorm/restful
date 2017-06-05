/**
 * Created by kistorm on 2017/4/28.
 */
var $ = require('../common');
var fs = $.packages.fs;
var path = $.packages.path;
var util = $.packages.lodash;
var db = {sequelize: require('./db.connection')};
var read = util.each((fs.readdirSync(path.join(__dirname, './models')) || []), function (dir) {
    var modelName = dir.substring(0, dir.indexOf('.js'));
    util.set(db, modelName, db.sequelize.import(path.join('./models', dir)));
});
module.exports = db;