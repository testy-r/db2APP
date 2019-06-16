/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Atmosphaere', {
    Atmosphaere_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    AtName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DurchschnittsTemp: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'Atmosphaere',
    timestamps :false
  });
};
