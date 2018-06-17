const Sequelize = require('sequelize')
const db = require('../db')

const Countries = db.define('countries', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  group: {
    type: Sequelize.STRING,
    allowNull: false
  },
  groupId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

// async function countryData() {
//   const countries = await Promise.all([
//     Countries.create({id: 1, name: 'Brazil', group: 'E', groupId: 797, userId: 1}),
//     Countries.create({id: 2, name: 'Germany', group: 'F', groupId: 798, userId: 3}),
//     Countries.create({id: 3, name: 'Spain', group: 'B', groupId: 794}),
//     Countries.create({id: 4, name: 'France', group: 'C', groupId: 795, userId: 4}),
//     Countries.create({id: 5, name: 'Argentina', group: 'D', groupId: 796, userId: 5}),
//     Countries.create({id: 6, name: 'Belgium', group: 'G', groupId: 799, userId: 4}),
//     Countries.create({id: 7, name: 'England', group: 'G', groupId: 799}),
//     Countries.create({id: 8, name: 'Portugal', group: 'B', groupId: 794}),
//     Countries.create({id: 9, name: 'Uruguay', group: 'A', groupId: 793, userId: 2}),
//     Countries.create({id: 10, name: 'Croatia', group: 'D', groupId: 796}),
//     Countries.create({id: 11, name: 'Colombia', group: 'H', groupId: 800, userId: 5}),
//     Countries.create({id: 12, name: 'Russia', group: 'A', groupId: 793, userId: 3}),
//     Countries.create({id: 13, name: 'Poland', group: 'H', groupId: 800, userId: 2}),
//     Countries.create({id: 14, name: 'Denmark', group: 'C', groupId: 795}),
//     Countries.create({id: 15, name: 'Switzerland', group: 'E', groupId: 797}),
//     Countries.create({id: 16, name: 'Mexico', group: 'F', groupId: 798}),
//     Countries.create({id: 17, name: 'Serbia', group: 'E', groupId: 797}),
//     Countries.create({id: 18, name: 'Peru', group: 'C', groupId: 795, userId: 2}),
//     Countries.create({id: 19, name: 'Senegal', group: 'H', groupId: 800, userId: 3}),
//     Countries.create({id: 20, name: 'Sweden', group: 'F', groupId: 798, userId: 1}),
//     Countries.create({id: 21, name: 'Egypt', group: 'A', groupId: 793, userId: 1}),
//     Countries.create({id: 22, name: 'Iceland', group: 'D', groupId: 796, userId: 1}),
//     Countries.create({id: 23, name: 'Nigeria', group: 'D', groupId: 796, userId: 4}),
//     Countries.create({id: 24, name: 'Morocco', group: 'B', groupId: 794, userId: 2}),
//     Countries.create({id: 25, name: 'Japan', group: 'H', groupId: 800, userId: 5}),
//     Countries.create({id: 26, name: 'Korea Republic', group: 'F', groupId: 798}),
//     Countries.create({id: 27, name: 'Costa Rica', group: 'E', groupId: 797, userId: 5}),
//     Countries.create({id: 28, name: 'Australia', group: 'C', groupId: 795}),
//     Countries.create({id: 29, name: 'Iran', group: 'B', groupId: 794}),
//     Countries.create({id: 30, name: 'Tunisia', group: 'G', groupId: 799}),
//     Countries.create({id: 31, name: 'Panama', group: 'G', groupId: 799, userId: 4}),
//     Countries.create({id: 32, name: 'Saudi Arabia', group: 'A', groupId: 793, userId: 3})
//   ])
// }

// countryData()
// .catch(err => {
//   console.error('Error syncing default country data: ', err)
// })







module.exports = Countries
