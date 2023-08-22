const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('products-table', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  
  name: {
    type: Sequelize.STRING,
    allowNull : false,
  },
  price: {
    type:Sequelize.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  createdAt:{
    type : Sequelize.DATE,
    allowNull : false,
    unique : true,
  },updatedAt:{
    type : Sequelize.DATE,
    allowNull : false,
    unique : true,
  }
  });

module.exports = Product;
