const { DataTypes } = require('sequelize');
const sequelize = require('../static/js/utils/db-connection');

const IdentityCardDetails = sequelize.define('identityCardDetails',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:true
    },
    cardNo: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    }
})

module.exports = IdentityCardDetails