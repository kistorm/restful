/* jshint indent: 1 */
var crypto = require('crypto');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('example', {
        name: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique:true,
            defaultValue: 'kistorm'
        },
        password: {
            type: DataTypes.STRING(32),
            set:function(val){
                if(!val) {
                    val = "123456";
                }
                var ret = crypto.createHash('md5').update(val).digest("hex");
                this.setDataValue('password', ret);
            }
        }
    }, {
        tableName: 'example'
    });
};