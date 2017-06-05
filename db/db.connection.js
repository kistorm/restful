/**
 * Created by kistorm on 2017/4/28.
 */
var Sequelize = require('sequelize');
var $ = require('../common');
var db_conf = $.conf.database;
module.exports = new Sequelize(db_conf.database, db_conf.user, db_conf.password, db_conf.options);