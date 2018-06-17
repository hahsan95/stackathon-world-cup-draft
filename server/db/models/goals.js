const Sequelize = require('sequelize')
const db = require('../db')

const Goals = db.define('goals', {
  byRank: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  byName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  onRank: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  onName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pointsAwarded: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})


module.exports = Goals
