/* jshint indent: 1 */
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tableInfo', {
		creator: {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: ''
		}
	}, {
		tableName: 'tableInfo'
	});
};
