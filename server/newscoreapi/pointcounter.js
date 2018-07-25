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

let goalAdderBy = async () => {
  let goals = await Goals.findAll()
  for(let i = 0; i < goals.length; i++){
    let byRankCountry = await Countries.findOne({
      where: {
        name: goals[i].byName
      }
    })
    let byRank = byRankCountry.id
    let updateByRank = await Goals.update({
        byRank: byRank
      }, {
        where: {
          byName: goals[i].byName
        }
      }
  )}
}

let goalAdderOn = async () => {
  let goals = await Goals.findAll()
  for(let i = 0; i < goals.length; i++){
    let onRankCountry = await Countries.findOne({
      where: {
        name: goals[i].onName
      }
    })
    let onRank = onRankCountry.id
    let updateByRank = await Goals.update({
        onRank: onRank
      }, {
        where: {
          onName: goals[i].onName
        }
      }
  )}
}


// goalCounterHome();
// goalCounterAway();
// goalAdderBy();
// goalAdderOn();

