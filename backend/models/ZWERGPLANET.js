/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZWERGPLANET', {
    Zwergplanet_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlanetName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Masse: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Durchmesser: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Dichte: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Aphel: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Periphel: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    anzahlHimmelskoerper: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Planetensystem_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'PLANETENSYSTEM',
        key: 'Planetensystem_ID'
      }
    }
  }, {
    tableName: 'ZWERGPLANET',
    timestamps :false
  });
};
