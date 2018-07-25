const Sequelize = require('sequelize')
const db = require('../db')

const Goals = db.define('goals', {
  byName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  onName: {
    type: Sequelize.STRING,
    allowNull: false
  }
})


module.exports = Goals
