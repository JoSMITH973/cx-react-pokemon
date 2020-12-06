const db = require('../../database')
const express = require ('express')
const router = express.Router()
const pokemonRoute = require('./pokemonId')

router.use('/', pokemonRoute)

module.exports = router