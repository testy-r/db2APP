/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HabitablePlaneten', {
    Planet_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
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
    Planetensystem_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'HabitablePlaneten',
    timestamps :false
  });
};
