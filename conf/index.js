module.exports = {
    "db": require('./conf.db.js'),
    "database": require('./conf.db.js').mysql || {},
    "system": require('./conf.system.js'),
    "dirs": require('./conf.dirs.js')
}