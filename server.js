const express = require('express')
const fs = require('fs')
// const cors = require('cors')
const knex = require('knex');
const bodyParser = require('body-parser')

const data = fs.readFileSync('./server/pokedex.json','utf-8')
const json = JSON.parse(data)
// console.log(json)
const app = express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res) => {
    console.log('Server is running')
    res.send('<h1>Hello World</h1><h3> How are you Leo ?</h3>')
})

app.get('/pokelist',(req,res) => {
    console.log('Server is running')
    res.send(json)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
    // req.send('Hello World')
})
