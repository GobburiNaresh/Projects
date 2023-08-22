const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Activity = sequelize.define('activity-list', {
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
  description: {
    type: Sequelize.STRING,
    allowNull : false,
  },
  list: {
    type: Sequelize.STRING,
    allowNull : true,
  },
  donelist: {
    type: Sequelize.STRING,
    allowNull : true,
  },
  remaininglist: {
    type: Sequelize.STRING,
    allowNull : true,
  }

  });

module.exports = Activity;
