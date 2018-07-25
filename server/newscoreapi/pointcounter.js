const Games = require('../db/models/games')
const Goals = require('../db/models/goals')
const Countries = require('../db/models/countries')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

let goalCounterHome = async () => {
  let gamesToAdd = await Games.findAll()
  for(let i = 0; i < gamesToAdd.length; i++){
    let homeTeams = await Countries.findAll({
      where: {
        name: gamesToAdd[i].homeTeam,
        userId: {
          [Op.ne]: null
        }
      }
    })

    if(homeTeams.length && gamesToAdd[i].score1 > 0){
      let score = gamesToAdd[i].score1
      let byName = homeTeams[0].name
      let onName = gamesToAdd[i].awayTeam
      let userId = homeTeams[0].userId
      // console.log(byName, onName, 'for: ' + userId, 'score: ' + score)
      for(let i = 0; i < score; i++){
        await  Goals.create({
          byName: byName, onName: onName, userId: userId
        })
      }
    }
  }
}

let goalCounterAway = async () => {
  let gamesToAdd = await Games.findAll()
  for(let i = 0; i < gamesToAdd.length; i++){
    let awayTeams = await Countries.findAll({
      where: {
        name: gamesToAdd[i].awayTeam,
        userId: {
          [Op.ne]: null
        }
      }
    })

    if(awayTeams.length && gamesToAdd[i].score2 > 0){
      let score = gamesToAdd[i].score2
      let byName = awayTeams[0].name
      let onName = gamesToAdd[i].homeTeam
      let userId = awayTeams[0].userId
      // console.log(byName, onName, 'for: ' + userId, 'score: ' + score)
      for(let x = 0; x < score; x++){
        await  Goals.create({
          byName: byName, onName: onName, userId: userId
        })
      }
    }
  }
}

// goalCounterHome();
// goalCounterAway();
