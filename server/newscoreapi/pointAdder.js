const Goals = require('../db/models/goals')
const User = require('../db/models/user')
const Sequelize = require('sequelize')

let pointCounter = async () => {
  let goals = await Goals.findAll()
  for(let i = 0; i < goals.length; i++){
    if(goals[i].byRank > goals[i].onRank){
      let score = 5 + (goals[i].byRank - goals[i].onRank)
      await Goals.update({
        pointsAwarded: score
      }, {
        where: {
          byName: goals[i].byName,
          onName: goals[i].onName
        }
      })
    } else {
      let score = 5
      await Goals.update({
        pointsAwarded: score
      }, {
        where: {
          byName: goals[i].byName,
          onName: goals[i].onName
        }
      })
    }
  }
}

// pointCounter()

let pointAdder = async () => {
  let goals = await Goals.findAll()
  for(let i = 0; i < goals.length; i++){
    await User.update({
      points: Sequelize.literal(`points + ${goals[i].pointsAwarded}`)
    }, {
      where: {
        id: goals[i].userId
      }
    })
  }
}

// pointAdder()
