const Sequelize = require('sequelize')
const db = require('../db')

const Games = db.define('games', {
  gameId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  homeTeam: {
    type: Sequelize.STRING,
    allowNull: false
  },
  awayTeam: {
    type: Sequelize.STRING,
    allowNull:false
  }
})

module.exports = Games
