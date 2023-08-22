const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user-details', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  
  name: {
    type:Sequelize.STRING,
    allowNull : false,
  },
  email: {
    type:Sequelize.STRING,
    allowNull : false,
    unique : true
  },
  phoneNumber:{
    type : Sequelize.STRING,
    allowNull : false,
    unique : true
  }
  },
  {
    timestamps: false // Disable automatic timestamps
});

module.exports = User;
