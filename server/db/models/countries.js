const Sequelize = require('sequelize')
const db = require('../db')

const Countries = db.define('countries', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  group: {
    type: Sequelize.STRING,
    allowNull: false
  },
  groupId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})



module.exports = Countries
