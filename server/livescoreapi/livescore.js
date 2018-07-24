const axios = require('axios')
const Games = require('../db/models/games')
const sortingAlgorithm = require('./sortingalgorithm')
const pointCounter = require('./pointCounter')


if (process.env.NODE_ENV !== 'production') require('../../secrets')

// let setGame = async (match) => {
//     try {
//       for(let i = 0; i < match.length; i++) {
//         let check = await Games.findOne({
//           where: {
//             gameId: await match[i].id
//           }
//         })
//         if(!check) {
//           Games.create({ gameId: await match[i].id, homeTeam: await match[i].home_name, awayTeam: await match[i].away_name, score: match[i].score })
//         } else {
//           console.log('already in database')
//         }
//       }
//     } catch (err) {
//       console.log('YOU GOT AN ERROR!')
//     }
// }

let getGamesFromAPI = async (league) => {
  let response = await axios.get(`http://livescore-api.com/api-client/scores/history.json?key=${process.env.LIVESCORE_API_KEY}&secret=${process.env.LIVESCORE_API_SECRET}&league=${league}`)
  try {
    let matches = response.data.data.match
    setGame(matches)
    console.log(`*** league ${league} synced ***`)

  } catch (err) {
    console.log('caught an error', err)
  }
}

// let setEveryLeague = async () => {
//   for (let i = 793; i <= 805; i++) {
//     await getGamesFromAPI(i)
//   }
// }

/*
Initial DB Population
*/

// let initialCheck = async () => {
//   await setEveryLeague()
//   console.log('***SET LEAGUES***')
//   await sortingAlgorithm()
//   console.log('***SET GOALS***')
//   await pointCounter()
// }

// initialCheck()
// .catch(err => {
//   console.log('Found an error during initial population: ', err)
// })

/*
Checking For New Scores Every Hour
*/

// let checkingEveryHour = async () => {
//   console.log('Checking For Newly Completed Matches')
//   await setEveryLeague().catch(err => {
//     console.log('Found an error while updating: ', err)
//   })

//   await sortingAlgorithm().catch(err => {
//     console.log('Found an error while updating: ', err)
//   })

//   await pointCounter().catch(err => {
//     console.log('Found an error while updating: ', err)
//   })

// }

// setInterval(checkingEveryHour, 60*60*1000)



