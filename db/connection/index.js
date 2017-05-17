/**
 * Created by kistorm on 2017/4/28.
 */
var Sequelize = require('sequelize');
var db_conf = require('../../conf').database;
var connection = new Sequelize(db_conf.database, db_conf.user, db_conf.password, db_conf.options);
module.exports = connection;