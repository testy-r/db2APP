/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vAnzahlPlPlanetSys', {
    ANZAHLDERPLANETEN: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    MASSE: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'vAnzahlPlPlanetSys',
    timestamps :false
  });
};
