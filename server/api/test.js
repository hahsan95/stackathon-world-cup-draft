const router = require('express').Router()
const {User} = require('../db/models')


router.get('/', async (req, res, next) => {
  try {
    let users = await User.findAll()
    res.json(users)
  } catch (err) {
    console.error(err)
  }

})

module.exports = router
