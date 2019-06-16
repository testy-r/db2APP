/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('p_stats', {
    p_statsID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    total_planetensysteme: {
      type: DataTypes.INTEGER(30),
      allowNull: true
    },
    total_masse: {
      type: DataTypes.INTEGER(30),
      allowNull: true
    }
  }, {
    tableName: 'p_stats',
    timestamps :false
  });
};
