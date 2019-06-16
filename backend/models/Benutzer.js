/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Benutzer', {
        Benutzer_ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        BenutzerName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        Passwort: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        BenutzerRolle: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        BenutzerLevel: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
    }, {
        tableName: 'Benutzer',
        timestamps :false
    });
};
