/**
 * Created by kistorm on 2017/4/28.
 */
var fs = require('fs');
var path = require('path');
var models_path = path.join(__dirname, './models');
var models = fs.readdirSync(models_path).join().replace(/.js/g, '').split(",");

module.exports = {
    connection: require('./connection'),
    instance: require('./instance'),
    crud: require('./common'),
    models: models
}