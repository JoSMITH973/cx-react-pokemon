const express = require('express')
const app = express()
const PORT = process.argv[2] || 4242

const pokemonId = require('./routes/pokemons')
const apiRoute = require('./routes/pokemons')

app.use('/pokemons',apiRoute)
app.use('/',apiRoute)

// app.get('/',(req,res) => {
//     console.log('Server is listening on localhost:'+PORT)
//     res.send('<h1>Hello World</h1>')
// })
// app.get('/pokemons',(req,res) => {
//     console.log('Server is listening on localhost:'+PORT)
//     res.send('<h1>Hello World</h1>')
// })

// app.get('/pokemons/:id',(req,res) => {
//     console.log('Server is running')
//     res.send(json)
// })

app.listen(PORT, () => {
    console.log("Server is running on port "+PORT)
    // req.send('Hello World')
})
