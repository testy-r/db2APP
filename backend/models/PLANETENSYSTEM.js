/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PLANETENSYSTEM', {
    Planetensystem_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlanetensystemName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    AnzahlDerPlaneten: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Masse: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'PLANETENSYSTEM',
    timestamps :false
  });
};
