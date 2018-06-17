const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Games = require('../db/models/games')
const Goals = require('../db/models/goals')
const Countries = require('../db/models/countries')



let unaccountedForGames

let findGames = async () => {
  unaccountedForGames = await Games.findAll({
    where: {
      pointsAddedToPlayer: false,
      score: {
        [Op.ne]: "0 - 0"
      }
    }
  })
}

let homeGames = async () => {
  for (let i = 0; i < unaccountedForGames.length; i++) {
    let homeGoals = await Countries.findAll({
      where: {
        name: unaccountedForGames[i].homeTeam,
        userId: {
          [Op.ne]: null
        }
      }
    })
    // console.log(i, '******', unaccountedForGames[i].homeTeam)
    if(homeGoals.length) {
      let scoreFound = false
      let score = ""
      for (let z = 0; scoreFound === false; z++) {
        if (unaccountedForGames[i].score[z] === " "){
          scoreFound = true
        } else {
          score += unaccountedForGames[i].score[z]
        }
      }
      score = Number(score)

      for (let z = 0; z < score; z++){
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

        let pointsAwarded = 5

        if (byRank > onRank) {
          pointsAwarded += (byRank - onRank)
        }

        Goals.create({
          byRank: byRank, byName: byName, onRank: onRank, onName: onName, pointsAwarded: pointsAwarded
        })
      }
    }
  }
}

// let awayGames = async () => {
//   for (let i = 0; i < unaccountedForGames.length; i++) {
//     let awayGoals = await Countries.findAll({
//       where: {
//         name: unaccountedForGames[i].awayTeam,
//         userId: {
//           [Op.ne]: null
//         }
//       }
//     })
//     if(awayGoals.length) {
//       let scoreFound = false
//       let score = ""
//       for (let z = unaccountedForGames[i].score[z].length-1; scoreFound === false; z--) {
//         if (unaccountedForGames[i].score[z] === " "){
//           scoreFound = true
//         } else {
//           score += unaccountedForGames[i].score[z]
//         }
//       }
//       score = Number(score)

//       for (let z = 0; z < score; z++){
//         let byName = unaccountedForGames[i].awayTeam
//         let byRank = await Countries.findOne({
//           attributes: ['id'],
//           where: {
//             name: byName
//           }
//         })
//         byRank = byRank.id

//         let onName = unaccountedForGames[i].homeTeam
//         let onRank = await Countries.findOne({
//           attributes: ['id'],
//           where: {
//             name: onName
//           }
//         })
//         onRank = onRank.userId

//         let pointsAwarded = 5

//         if (byRank > onRank) {
//           pointsAwarded += (byRank - onRank)
//         }

//         Goals.create({
//           byRank: byRank, byName: byName, onRank: onRank, onName: onName, pointsAwarded: pointsAwarded
//         })
//       }
//     }
//   }
// }

let algorithmRunner = async () => {
  await findGames()
  await homeGames()
  await awayGames()
}

algorithmRunner()

// let markMatchesAsCompleted = async () => {
//   await Games.update({
//     pointsAddedToPlayer: false
//   }, {
//     where: {
//       pointsAddedToPlayer: true
//     }
//   })
// }




//let pointAlgorithm = async function() {

  /*
  Finding games that haven't had scores tallied
  */
  // let unaccountedForGames = await Games.findAll({
  //   where: {
  //     pointsAddedToPlayer: false,
  //     score: {
  //       [Op.ne]: "0 - 0"
  //     }
  //   }
  // })


  /*
  Finding countries that have a userId in the games found.
  Because scores are in '# - #' format, need to calculate home then away
  */

 /* HOME TEAMS */

  // for (let i = 0; i < unaccountedForGames.length; i++) {
  //   let homeGoals = await Countries.findAll({
  //     where: {
  //       name: unaccountedForGames[i].homeTeam,
  //       userId: {
  //         [Op.ne]: null
  //       }
  //     }
  //   })
  //   if(homeGoals.length) {
  //     let scoreFound = false
  //     let score = ""
  //     for (let z = 0; scoreFound === false; z++) {
  //       if (unaccountedForGames[i].score[z] === " "){
  //         scoreFound = true
  //       } else {
  //         score += unaccountedForGames[i].score[z]
  //       }
  //     }
  //     score = Number(score)

  //     for (let z = 0; z < score; z++){
  //       let byName = unaccountedForGames[i].homeTeam
  //       let byRank = await Countries.findOne({
  //         attributes: ['id'],
  //         where: {
  //           name: byName
  //         }
  //       })
  //       byRank = byRank.id

  //       let onName = unaccountedForGames[i].awayTeam
  //       let onRank = await Countries.findOne({
  //         attributes: ['id'],
  //         where: {
  //           name: onName
  //         }
  //       })
  //       onRank = onRank.id

  //       let pointsAwarded = 5

  //       if (byRank > onRank) {
  //         pointsAwarded += (byRank - onRank)
  //       }

  //       Goals.create({
  //         byRank: byRank, byName: byName, onRank: onRank, onName: onName, pointsAwarded: pointsAwarded
  //       })
  //     }
  //   }
  // }

   /* AWAY TEAMS */

  // for (let i = 0; i < unaccountedForGames.length; i++) {
  //   let awayGoals = await Countries.findAll({
  //     where: {
  //       name: unaccountedForGames[i].awayTeam,
  //       userId: {
  //         [Op.ne]: null
  //       }
  //     }
  //   })
  //   if(awayGoals.length) {
  //     let scoreFound = false
  //     let score = ""
  //     for (let z = unaccountedForGames[i].score[z].length-1; scoreFound === false; z--) {
  //       if (unaccountedForGames[i].score[z] === " "){
  //         scoreFound = true
  //       } else {
  //         score += unaccountedForGames[i].score[z]
  //       }
  //     }
  //     score = Number(score)

  //     for (let z = 0; z < score; z++){
  //       let byName = unaccountedForGames[i].awayTeam
  //       let byRank = await Countries.findOne({
  //         attributes: ['id'],
  //         where: {
  //           name: byName
  //         }
  //       })
  //       byRank = byRank.id

  //       let onName = unaccountedForGames[i].homeTeam
  //       let onRank = await Countries.findOne({
  //         attributes: ['id'],
  //         where: {
  //           name: onName
  //         }
  //       })
  //       onRank = onRank.userId

  //       let pointsAwarded = 5

  //       if (byRank > onRank) {
  //         pointsAwarded += (byRank - onRank)
  //       }

  //       Goals.create({
  //         byRank: byRank, byName: byName, onRank: onRank, onName: onName, pointsAwarded: pointsAwarded
  //       })
  //     }
  //   }
  // }

  /*
  Marking games as tallied
  */
//  await Games.update({
//   pointsAddedToPlayer: false
// }, {
//   where: {
//    pointsAddedToPlayer: true
//   }
// })
//}

// module.exports = pointAlgorithm
