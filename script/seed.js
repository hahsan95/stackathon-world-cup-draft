'use strict'

const db = require('../server/db')
const { User, Countries } = require('../server/db/models')

/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const users = await Promise.all([
    User.create({name: 'Homum', email: 'homum@email.com', password: '123'}),
    User.create({name: 'Patrick', email: 'patrick@email.com', password: '123'}),
    User.create({name: 'Calvin', email: 'calvin@email.com', password: '123'}),
    User.create({name: 'Abhi', email: 'abhi@email.com', password: '123'}),
    User.create({name: 'Burke', email: 'burke@email.com', password: '123'})
  ])

  const countries = await Promise.all([
    Countries.create({name: 'Brazil', group: 'E', groupId: 797, userId: 1}),
    Countries.create({name: 'Germany', group: 'F', groupId: 798, userId: 3}),
    Countries.create({name: 'Spain', group: 'B', groupId: 794}),
    Countries.create({name: 'France', group: 'C', groupId: 795, userId: 4}),
    Countries.create({name: 'Argentina', group: 'D', groupId: 796, userId: 5}),
    Countries.create({name: 'Belgium', group: 'G', groupId: 799, userId: 4}),
    Countries.create({name: 'England', group: 'G', groupId: 799}),
    Countries.create({name: 'Portugal', group: 'B', groupId: 794}),
    Countries.create({name: 'Uruguay', group: 'A', groupId: 793, userId: 2}),
    Countries.create({name: 'Croatia', group: 'D', groupId: 796}),
    Countries.create({name: 'Colombia', group: 'H', groupId: 800, userId: 5}),
    Countries.create({name: 'Russia', group: 'A', groupId: 793, userId: 3}),
    Countries.create({name: 'Poland', group: 'H', groupId: 800, userId: 2}),
    Countries.create({name: 'Denmark', group: 'C', groupId: 795}),
    Countries.create({name: 'Switzerland', group: 'E', groupId: 797}),
    Countries.create({name: 'Mexico', group: 'F', groupId: 798}),
    Countries.create({name: 'Serbia', group: 'E', groupId: 797}),
    Countries.create({name: 'Peru', group: 'C', groupId: 795, userId: 2}),
    Countries.create({name: 'Senegal', group: 'H', groupId: 800, userId: 3}),
    Countries.create({name: 'Sweden', group: 'F', groupId: 798, userId: 1}),
    Countries.create({name: 'Egypt', group: 'A', groupId: 793, userId: 1}),
    Countries.create({name: 'Iceland', group: 'D', groupId: 796, userId: 1}),
    Countries.create({name: 'Nigeria', group: 'D', groupId: 796, userId: 4}),
    Countries.create({name: 'Morocco', group: 'B', groupId: 794, userId: 2}),
    Countries.create({name: 'Japan', group: 'H', groupId: 800, userId: 5}),
    Countries.create({name: 'Korea Republic', group: 'F', groupId: 798}),
    Countries.create({name: 'Costa Rica', group: 'E', groupId: 797, userId: 5}),
    Countries.create({name: 'Australia', group: 'C', groupId: 795}),
    Countries.create({name: 'Iran', group: 'B', groupId: 794}),
    Countries.create({name: 'Tunisia', group: 'G', groupId: 799}),
    Countries.create({name: 'Panama', group: 'G', groupId: 799, userId: 4}),
    Countries.create({name: 'Saudi Arabia', group: 'A', groupId: 793, userId: 3})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  seed()
    .catch(err => {
      console.error(err)
      process.exitCode = 1
    })
    .then(() => {
      // `finally` is like then + catch. It runs no matter what.
      console.log('closing db connection')
      db.close()
      console.log('db connection closed')
    })
  /*
   * note: everything outside of the async function is totally synchronous
   * The console.log below will occur before any of the logs that occur inside
   * of the async function
   */
  console.log('seeding...')
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
