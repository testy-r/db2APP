/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AtmosphaereStoff', {
    Atmosphaere_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Atmosphaere',
        key: 'Atmosphaere_ID'
      }
    },
    Stoff_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Stoff',
        key: 'Stoff_ID'
      }
    }
  }, {
    tableName: 'AtmosphaereStoff'
  });
};
