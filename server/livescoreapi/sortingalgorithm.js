const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Games = require('../db/models/games')
const Goals = require('../db/models/goals')
const Countries = require('../db/models/countries')

let sortingAlgorithm = async () => {
  let unaccountedForGames = await Games.findAll({
    where: {
      pointsAddedToPlayer: false,
      score: {
        [Op.ne]: "0 - 0"
      }
    }
  })

  for (let i = 0; i < unaccountedForGames.length; i++) {
    let scoreHome = Number(unaccountedForGames[i].score[0])

    let homeGoals = await Countries.findAll({
      where: {
        name: unaccountedForGames[i].homeTeam,
        userId: {
          [Op.ne]: null
        }
      }
    })
    if (homeGoals.length && scoreHome) {
      for (let z = 0; z < scoreHome; z++){
        let byName = unaccountedForGames[i].homeTeam
        let byRank = await Countries.findOne({
          attributes: ['id'],
          where: {
            name: byName
          }
        })
        byRank = byRank.id

        let onName = unaccountedForGames[i].awayTeam
        let onRank = await Countries.findOne({
          attributes: ['id'],
          where: {
            name: onName
          }
        })
        onRank = onRank.id

        if (byRank > onRank) {
          pointsAwarded = 5 + (byRank - onRank)
        } else {
          pointsAwarded = 5
        }

        Goals.create({
          byRank: byRank, byName: byName, onRank: onRank, onName: onName, pointsAwarded: pointsAwarded
        })
      }
    }
  }

  for (let i = 0; i < unaccountedForGames.length; i++) {
    let scoreAway = Number(unaccountedForGames[i].score[unaccountedForGames[i].score.length-1])

    let awayGoals = await Countries.findAll({
      where: {
        name: unaccountedForGames[i].awayTeam,
        userId: {
          [Op.ne]: null
        }
      }
    })
    if (awayGoals.length && scoreAway) {
      for (let z = 0; z < scoreAway; z++){
        let byName = unaccountedForGames[i].awayTeam
        let byRank = await Countries.findOne({
          attributes: ['id'],
          where: {
            name: byName
          }
        })
        byRank = byRank.id

        let onName = unaccountedForGames[i].homeTeam
        let onRank = await Countries.findOne({
          attributes: ['id'],
          where: {
            name: onName
          }
        })
        onRank = onRank.id

        if (byRank > onRank) {
          pointsAwarded = 5 + (byRank - onRank)
        } else {
          pointsAwarded = 5
        }

        Goals.create({
          byRank: byRank, byName: byName, onRank: onRank, onName: onName, pointsAwarded: pointsAwarded
        })
      }
    }
  }

  /*
  Marking games as tallied
  */

  await Games.update({
    pointsAddedToPlayer: true
  }, {
    where: {
      pointsAddedToPlayer: false
    }
  })
}


module.exports = sortingAlgorithm
