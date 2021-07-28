module.exports = (opts) => {
    const fastify = require('fastify')(opts)
    const axios = require('axios')

    fastify.get('/products', async (request, reply) => {
        const auth = request.headers['authentication']
        if(!auth){
            reply.code(401).send({status: 'Unauthorized'})
        }
        const token = auth.split(' ')[1]
        //verify valid token
        try{
            await axios.get(`http://localhost:5000/jwt-verify?token=${token}`)

        }catch(e){
            console.log(e)
            reply.code(401).send({status: 'Unauthorized'})
        }

        console.log(decoded.header)

        const searchTerm = request.query['search']
        const products = require('./products.json')

        let filteredProducts = []
        if(searchTerm){
            for(product of products){
                if(product.name.includes(searchTerm)){
                    filteredProducts.push(product)
                }
            }
        } else {
            filteredProducts = products
        }

        return filteredProducts
    })

    return fastify
}