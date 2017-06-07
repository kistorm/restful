/**
 * Created by kistorm on 2017/5/5.
 */
var $ = require('../../common');
var logger = $.logger;
var express = require('express');
var app = express.Router();
var models = require('../../db').models;
var controllers = require('../controllers');

function print (){
    logger.info('Hello World info !');
    logger.error('Hello World error !');
    logger.warn('Hello World warn !');
    logger.dbLogger.info('Hello World!');
    logger.dbLogger.error('Hello World!');
    throw new Error("xx");
}

module.exports = function (app) {
    //print();
    var dynamicLoadRouter = function (route_path, controller) {
        var locate = route_path + '/:id';
        app.route(route_path).get(controller.list).post(controller.post);
        app.route(locate).get(controller.get).delete(controller.delete).put(controller.put);
    };
    models.forEach(function (modelName) {
        var route_path = "/api/rest/" + modelName;
        var controller = new controllers(modelName);
        dynamicLoadRouter(route_path, controller);
    })
    // return app;
}