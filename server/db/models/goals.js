const Sequelize = require('sequelize')
const db = require('../db')

const Goals = db.define('goals', {
  byRank: {
    type: Sequelize.INTEGER
  },
  byName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  onRank: {
    type: Sequelize.INTEGER
  },
  onName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pointsAwarded: {
    type: Sequelize.INTEGER
  }
})


module.exports = Goals
