/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MOND', {
    Mond_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MondName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Bahnperiode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Masse: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Planet_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'PLANET',
        key: 'Planet_ID'
      }
    },
    Zwergplanet_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'MOND',
    timestamps :false
  });
};
