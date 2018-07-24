const axios = require('axios')
const Games = require('../db/models/games')

let scoreRetriever = async () => {
  let response = await axios.get('https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json')
  let rounds = response.data.rounds
  for(let i = 0; i < rounds.length; i++){
    for(let z = 0; z < rounds[i].matches.length; z++){
      let match = rounds[i].matches[z]
      Games.create({ homeTeam: await match.team1.name, awayTeam: await match.team2.name, score1: await match.score1, score2: await match.score2 })
    }
  }
  console.log('*** Matches Synced ***')
}

// scoreRetriever();


