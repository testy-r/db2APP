/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Stoff', {
    Stoff_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    StoffName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Farbe: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Dichte: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'Stoff',
    timestamps :false
  });
};
