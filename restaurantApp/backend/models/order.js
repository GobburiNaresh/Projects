const Sequelize = require('sequelize');

const sequelize = require('../util/database');

  const Order = sequelize.define('order-details', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dish: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    table_number: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    createdAt:{
      type: Sequelize.DATE,
      allowNull: true,
    }, 
    updatedAt:{
      type: Sequelize.DATE,
      allowNull: true,
    }

  });

module.exports = Order;
