const Sequelize = require('sequelize');
const db = require('../config/db');
/* const uuid = require('uuid').v4; */

const Empleados = db.define('personnel_employee', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
    },
    first_name: Sequelize.STRING(60),
    last_name: Sequelize.STRING(60),
}, {
    freezeTableName: true // Model tableName will be the same as the model name
})

module.exports = Empleados;