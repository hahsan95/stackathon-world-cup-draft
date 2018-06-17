const User = require('./user')
const Countries = require('./countries')
const Goals = require('./goals')
const Games = require('./games')
const livescore = require ('../../livescoreapi/livescore')
const sortingAlgorithm = require ('../../livescoreapi/sortingalgorithm')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

 Countries.hasMany(Goals)
 Goals.belongsTo(User)
 Countries.belongsTo(User)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Countries,
  Goals,
  Games,
  livescore,
  sortingAlgorithm
}
