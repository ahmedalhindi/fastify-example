const path = require('path')
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/', // optional: default '/'
})

// Templating engine
fastify.register(require('point-of-view'), {
  engine: {
    handlebars: require('handlebars')
  }
})

fastify.get('/', function (req, reply) {
  reply.view('./templates/index.html', {data:{title:'custom title woo hoo'}})
})

fastify.get('/ping', (req,reply)=>{
  return reply.send({ping:'pong'})
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
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