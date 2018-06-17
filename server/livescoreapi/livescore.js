const axios = require('axios')
const Games = require('../db/models/games')


if (process.env.NODE_ENV !== 'production') require('../../secrets')

let setGame = async (match) => {
    try {
      for(let i = 0; i < match.length; i++) {
        let check = await Games.findOne({
          where: {
            gameId: await match[i].id
          }
        })
        if(!check) {
          Games.create({ gameId: await match[i].id, homeTeam: await match[i].home_name, awayTeam: await match[i].away_name, score: match[i].score })
        } else {
          console.log('already in database')
        }
      }
    } catch (err) {
      console.log('YOU GOT AN ERROR!')
    }
}

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

let setEveryLeague = async () => {
  for (let i = 793; i <= 800; i++) {
    await getGamesFromAPI(i)
  }
}

/*
Initial DB Population
*/

setEveryLeague()

/*
Checking For New Scores Every Hour
*/

let checkingEveryHour = () => {
  console.log('Checking For Newly Completed Matches')
  setEveryLeague()
}

setInterval(checkingEveryHour, 60*60*1000)



