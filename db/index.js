/**
 * Created by kistorm on 2017/4/28.
 */

module.exports = {
    connection: require('./db.connection'),
    instance: require('./db.instance'),
    common: require('./db.common'),
    models: require('./db.instance').models.toString().replace(/.js/g, '').split(",")
}