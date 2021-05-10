// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3001)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

//  To run with fastify start server.js

// module.exports = async function (fastify, opts) {
//     fastify.get('/', async (request, reply) => {
//       return { hello: 'world' }
//     })
//   }