const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Games = require('../db/models/games')
const User = require('../db/models/user')
const Countries = require('../db/models/countries')

let pointAlgorithm = async () => {

  /*
  Finding games that haven't had scores tallied
  */
  let unaccountedForGames = await Games.findAll({
    where: {
      pointsAddedToPlayer: false
    }
  })


  /*
  Finding countries that have a userId in the games found
  */
  for (let i = 0; i < unaccountedForGames.length; i++) {
    let test = await Countries.findAll({
      where: {
        [Op.or]: [{name: unaccountedForGames[i].homeTeam}, {name: unaccountedForGames[i].awayTeam}],
        userId: {
          [Op.ne]: null
        }
      }
    })
    console.log(i + '*****', test)
  }

  /*
  Marking games as tallied
  */
//  await Games.update({
//   pointsAddedToPlayer: true
// }, {
//   where: {
//    pointsAddedToPlayer: false
//   }
// })



}

pointAlgorithm()

