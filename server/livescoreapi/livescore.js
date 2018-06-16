const axios = require('axios')

let scoreReturner = async () => {
  var scores = await axios.get(`https://livescore-api.com/api-client/scores/history.json?key=annowHSuPDLbNKHH&secret=DQh7rv7DGy8jy9UIxh73ZZyPCj0p4H6I&league=795`)
  console.log('***', scores)
}


module.exports = scoreReturner
