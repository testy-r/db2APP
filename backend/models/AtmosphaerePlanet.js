/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AtmosphaerePlanet', {
    Atmosphaere_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Atmosphaere',
        key: 'Atmosphaere_ID'
      }
    },
    Planet_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PLANET',
        key: 'Planet_ID'
      }
    },
    Anteil: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    hoehe: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'AtmosphaerePlanet'
  });
};
