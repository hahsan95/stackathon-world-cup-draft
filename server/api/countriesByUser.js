const router = require('express').Router()
const {Countries} = require('../db/models')


router.get('/:userId', async (req, res, next) => {
  try {
    let countries = await Countries.findAll({
      where: req.params,
      attributes: ['id', 'name', 'userId']
    })
    res.json(countries)
  } catch (err) {
    console.error(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    let allCountries = await Countries.findAll({
      attributes: ['id', 'name', 'userId']
    })
    res.json(allCountries)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
