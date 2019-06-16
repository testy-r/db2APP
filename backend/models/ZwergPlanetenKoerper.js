/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZwergPlanetenKoerper', {
    ZWERGPLANET_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    PLANETNAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    MASSE: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DURCHMESSER: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DICHTE: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    APHEL: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PERIPHEL: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ANZAHLHIMMELSKOERPER: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PLANETENSYSTEM_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'ZwergPlanetenKoerper',
    timestamps :false
  });
};
