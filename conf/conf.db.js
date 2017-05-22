/**
 * Created by user on 2017/5/22.
 */
exports.mysql = {
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
}