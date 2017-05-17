/**
 * Created by kistorm on 2017/4/30.
 *
 *
 * user guide

 * add
 * model.create(entity || entities,callback)

 * update,where must be not null
 * model.update({data:entity || entities,where:{}},callback)

 * del, where must be not null ,force:false
 * model.destory({where:{},[force:false]},callback)
 *
 *
 * acquire
 * model.acquire({[] ||{where:{...}},callback}
 *
 * list && listAndPaging
 * model.list([{}],callback)
 *
 * queryBySQL
 * sql must be not null,
 * bind must be not null, & is array ,default []
 * sqlType ,choese to sqlTypeEnums
 * model.queryBySQL(sql,keys,[sqlType],callback)
 *
 */
var enums = require('./enums.js');
var callback_pre_exec = enums.callback_pre_exec;
var sqlTypeEnums = enums.sqlTypeEnums;
var sequelize = enums.sequelize;

function crud(tableName) {
    var Model = require('../instance/index.js')[tableName];

    if (!tableName || !Model) throw new Error("unknow table", tableName);

    console.info("Constructor Exec done -->", tableName);

    var Executer = {};

    Executer.model = Model;

    Executer.acquire = function (param, callback) {
        //查询单条数据
        var options = param.where || {};
        callback = callback_pre_exec(callback);
        Model.findOne(options).then(function (model) {
            if (!model || !model.dataValues) {
                return callback(null, null);
            }
            callback(null, model.dataValues);
        }).catch(function (error) {
            callback(error, null);
        })
    }

    Executer.queryBySQL = function (param, callback) {
        var sql = param.sql;
        var bind = param.keys || null;
        var model = param.modelName || null;
        var sqlType = sqlTypeEnums[(param.sqlType || "RAW").toUpperCase()];
        callback = callback_pre_exec(callback);
        sequelize.transaction(function (t) {
            var opts = {
                raw: true,
                transaction: t,
                replacements: bind,
                logging: console.info,
                fieldMap: true,
                model: model
            }
            return sequelize.query(sql, opts);
        }).then(function (data) {
            callback(null, data);
        }).catch(function (error) {
            callback(error)
        })
    };

    Executer.list = function (param, callback) {
        var where = param.where;
        var group = param.group || "";
        var order = param.order || [];
        var limit = param.limit || 20;
        var offset = param.offset || 0;
        callback = callback_pre_exec(callback);
        Model.findAll({
            where: where,
            group: group,
            order: order,
            limit: limit,
            offset: offset,
            raw: true
        }).then(function (model) {
            if (!model) {
                return callback({message: ""});
            }
            callback(null, model);
        }).catch(function (error) {
            callback(error);
        })
    };

    Executer.listAndPaging = function (param, callback) {
        //获取列表，可分页
        var where = param.where;
        var group = param.group || "";
        var order = param.order || [];
        var limit = param.limit || 20;
        var offset = param.offset || 0;
        callback = callback_pre_exec(callback);
        Model.findAndCountAll({
            where: where,
            group: group,
            order: order,
            limit: limit,
            offset: offset,
            raw: true
        }).then(function (model) {
            if (!model) {
                return callback({message: ""});
            }
            callback(null, model);
        }).catch(function (error) {
            callback(error);
        })
    }

    Executer.update = function (param, callback) {
        //修改 ,data = 将被修改的对象
        var entities = param.data || {};
        var where = param.where || param.id ? {id: param.id} : null;
        callback = callback_pre_exec(callback);
        sequelize.transaction(function (t) {
            if (Array.isArray(entities)) {
                return Model.bulkUpdate(entities, {
                    where: where,
                    transaction: t
                });
            }
            return Model.update(entities, {
                where: where,
                transaction: t
            });
        }).then(function () {
            // console.log(data);
            callback(null);
        }).catch(function (error) {
            callback(error)
        })
    }

    Executer.create = function (entity, callback) {
        //添加
        console.info("create entity by", Model, JSON.stringify(entity || {}));

        callback = callback_pre_exec(callback);
        sequelize.transaction(function (t) {
            if (Array.isArray(entity)) {
                return Model.bulkCreate(entity, {
                    transaction: t
                });
            }
            return Model.create(entity, {
                transaction: t
            });
        }).then(function () {
            // console.log(data);
            callback(null);
        }).catch(function (error) {
            callback(error)
        })
    }

    Executer.destory = function (params, callback) {
        //删除
        callback = callback_pre_exec(callback);
        console.info("destroy entity by", Model, JSON.stringify(params || {}));
        sequelize.transaction(function (t) {
            var opts = {
                transaction: t,
                where: params.where,
                force: params.force
            }
            return Model.destroy(opts);
        }).then(function () {
            // console.log(data);
            callback(null);
        }).catch(function (error) {
            callback(error)
        })
    }

    return Executer;

}
module.exports = crud;