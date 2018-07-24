const Games = require('../db/models/games')
const Goals = require('../db/models/goals')
const Countries = require('../db/models/countries')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

let pointCounter = async () => {
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
      console.log(homeTeams[0].name, gamesToAdd[i].score1)
    }
    // let awayTeams = await Countries.findAll({
    //   where: {
    //     name: gamesToAdd[i].awayTeam,
    //     userId: {
    //       [Op.ne]: null
    //     }
    //   }
    // })
    // if(awayTeams.length){
    //   console.log(awayTeams[0].name)
    // }
  }
}

pointCounter();
