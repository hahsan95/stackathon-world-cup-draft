const Sequelize = require('sequelize')
const db = require('../db')

const Goals = db.define('goals', {})

module.exports = Goals
