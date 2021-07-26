<<<<<<< HEAD
const fastify = require('./server')({logger: true})

const start = async() => {
    try{
        await fastify.listen(3000, '0.0.0.0')
    } catch (err){
        fastify.log.error(err)
        process.exit(1)
    }
}

=======
const fastify = require('./server')({logger: true})

const start = async() => {
    try{
        await fastify.listen(3000)
    } catch (err){
        fastify.log.error(err)
        process.exit(1)
    }
}

>>>>>>> 564e81be5cfd3c7724e3ae040ebcb2d18286d35a
start()