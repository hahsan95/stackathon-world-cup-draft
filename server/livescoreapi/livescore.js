const axios = require('axios')
const { Games } = require('../db/models/games')



// let scoreReturner = () => {
//   axios.get(`http://livescore-api.com/api-client/fixtures/matches.json?key=annowHSuPDLbNKHH&secret=DQh7rv7DGy8jy9UIxh73ZZyPCj0p4H6I&league=794`)
//   .then((response) => {
//     console.log('*****', response.data)
//   })
//   .catch((err) => {
//     console.log('got an error', err)
//   })
// }

if (process.env.NODE_ENV !== 'production') require('../../secrets')

let scoreReturner = async () => {
  let response = await axios.get(`http://livescore-api.com/api-client/scores/history.json?key=${process.env.LIVESCORE_API_KEY}&secret=${process.env.LIVESCORE_API_SECRET}&league=794`)
  try {
    let match = response.data.data.match[0]
    // console.log('**poop**', response.data.data.match)
  } catch (err) {
    console.log('caught an error', err)
  }
}

console.log('***', Games)
// Games.create({ gameId: match.id, homeTeam: match.home_name, awayTeam: match.away_name }).then(game => console.log('**testing**', game))

scoreReturner()

