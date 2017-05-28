/**
 * Created by kistorm on 2017/5/27.
 */
var request = require("request");
var data = require('./data.json');
var init = function () {
    var temp = function (data, callback) {
        var options = {
            method: 'POST',
            url: 'http://localhost:3009/api/rest/example',
            headers: {
                'postman-token': '37fe0330-fe3d-2238-e2a5-ce45c3028855',
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: data,
            json: true
        };
        request(options, callback);
    };
    var async = require('async');
    async.eachLimit(data, 10, temp, function (err) {
        console.log(err ? "执行错误"+err : "执行结束");
    })
}
//init();