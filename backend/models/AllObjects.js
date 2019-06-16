/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AllObjects', {
    Planetname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Mondname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Zwergplanetname: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'AllObjects'
  });
};
