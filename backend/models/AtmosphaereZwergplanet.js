/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AtmosphaereZwergplanet', {
    Atmosphaere_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Atmosphaere',
        key: 'Atmosphaere_ID'
      }
    },
    Zwergplanet_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ZWERGPLANET',
        key: 'Zwergplanet_ID'
      }
    }
  }, {
    tableName: 'AtmosphaereZwergplanet'
  });
};
