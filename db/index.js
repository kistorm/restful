/**
 * Created by kistorm on 2017/4/28.
 */
var fs = require('fs');
var path = require('path');
var models_path = path.join(__dirname, './models');
var models = fs.readdirSync(models_path).join().replace(/.js/g, '').split(",");

module.exports = {
    connection: require('./db.connection'),
    instance: require('./db.instance'),
    common: require('./db.common'),
    models: models
}