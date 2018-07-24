const Sequelize = require('sequelize')
const db = require('../db')

const Games = db.define('games', {
  homeTeam: {
    type: Sequelize.STRING,
    allowNull: false
  },
  awayTeam: {
    type: Sequelize.STRING,
    allowNull: false
  },
  score1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  score2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pointsAddedToPlayer: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Games
