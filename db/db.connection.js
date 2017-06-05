/**
 * Created by kistorm on 2017/4/28.
 */
var $ = require('../common');
var db_conf = $.conf.database;
var sequelize = $.packages.sequelize;
module.exports = new sequelize(db_conf.database, db_conf.user, db_conf.password, db_conf.options);