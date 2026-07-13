const { DataTypes } = require('sequelize');
const sequelize = require('../static/js/utils/db-connection');

const Department = sequelize.define("department",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    }
})

module.exports=Department;