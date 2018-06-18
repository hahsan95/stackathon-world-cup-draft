const router = require('express').Router()
const {User, Games} = require('../db/models')


router.get('/', async (req, res, next) => {
  let poop = await Games.findAll()
  res.json(poop)
})

module.exports = router
