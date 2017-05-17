var path = require('path');
var uploadOutSpeciesDir = path.join(__dirname, "..", "/public/outspecies");
var uploadAvatarDir = path.join(__dirname, "..", "/public/avatar");
var uploadDir = path.join(__dirname, "..", "/public");
var serverport = 3009;
var database = {
    database: "test",
    user: "root",
    password: "root",
    options: {
        host: "127.0.0.1",
        port: "3306",
        dialect: 'mysql',
        charset: 'utf8',
        timezone: "+08:00",
        logging: console.error,
        sync: {
            force: true,
            hook: true
        }
        //,
        //replication: {
        //    read: [
        //        {host: '127.0.0.1', username: 'root', password: 'root', database: "testbpet_read"}
        //    ],
        //    write: {host: 'localhost', username: 'root', password: "root", database: "testbpet_wirte"}
        //},
        //pool: { // 如果需要重写链接池，请在 pool 选项中修改
        //    maxConnections: 20,
        //    maxIdleTime: 30000
        //}
    }
};


module.exports = {
    "database": database,
    "uploadDir": uploadDir,
    "uploadOutSpeciesDir": uploadOutSpeciesDir,
    "uploadAvatarDir": uploadAvatarDir,
    "serverport": serverport
}