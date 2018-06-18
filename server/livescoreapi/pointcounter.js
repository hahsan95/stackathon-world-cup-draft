const Goals = require('../db/models/goals')
const User = require('../db/models/user')
const Sequelize = require('sequelize')

let pointCounter = async () => {
  let users = await User.findAll()

  for(let i = 0; i < users.length; i++) {
    let userId = users[i].id
    let goals = await Goals.findAll({
      where: {
        userId: userId
      }
    })

    for(let z = 0; z < goals.length; z++) {
      if(goals[z].recorded === false) {
        await User.update({
          points: Sequelize.literal(`points + ${goals[z].pointsAwarded}`)
        }, {
          where: {
            id: userId
          }
        })
      }
      await Goals.update ({
        recorded: true
      } , {
        where: {
          id: goals[z].id
        }
      })
    }
  }
}

module.exports = pointCounter
