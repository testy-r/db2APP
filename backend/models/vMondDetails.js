/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vMondDetails', {
    MOND_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    MONDNAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    BAHNPERIODE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    MASSE: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PLANETNAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'vMondDetails',
    timestamps :false
  });
};
