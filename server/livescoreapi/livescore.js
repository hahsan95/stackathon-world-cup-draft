import axios from 'axios'

let history = axios.get(`/livescore-api.com/api-client/scores/history.json?key=annowHSuPDLbNKHH&secret=DQh7rv7DGy8jy9UIxh73ZZyPCj0p4H6I&league=793`)

console.log('***', history)

module.exports = history
