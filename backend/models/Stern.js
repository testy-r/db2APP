/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Stern', {
    Stern_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Helligkeit: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bayer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    leuchtkraft: {
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
    tableName: 'Stern',
    timestamps :false
  });
};
