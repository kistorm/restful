/**
 * Created by kistorm on 2017/5/5.
 */
var express = require('express');
var app = express.Router();
var models = require('../../db').models;
var controllers = require('../controllers');


module.exports = function (app) {

    console.log(global.$,1,3);
    var dynamicLoadRouter = function (route_path, controller) {
        var locate = route_path + '/:id';
        app.route(route_path).get(controller.list).post(controller.post);
        app.route(locate).get(controller.get).delete(controller.delete).put(controller.put);
    };
    models.forEach(function (modelName) {
        var route_path = "/api/rest/" + modelName;
        var controller = new controllers(modelName);
        dynamicLoadRouter(route_path,controller);
    })
    // return app;
}