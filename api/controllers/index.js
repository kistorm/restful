/**
 * Created by user on 2017/5/5.
 */
var models = require('../../db').models;
var service = require('./service');
var util = require('../../common').util;


var aop = function (req, res, exec_fn) {
    var input = util.mergeParams(req);
    exec_fn(input, function (err, result) {
        util.response_overwrite(res, err, result);
    });
}

var controllers = function (modelName) {
    var server = new service(modelName),controller = function(){};
    controller.get = function(req,res,next){ aop(req, res, server.get)}
    controller.list =  function(req,res,next){aop(req, res, server.list)}
    controller.post =  function(req,res,next){aop(req, res, server.post)}
    controller.put =  function(req,res,next){aop(req, res, server.put)}
    controller.delete = function(req,res,next){ aop(req, res, server.delete)}
    return controller;
}

module.exports = controllers;