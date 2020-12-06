const express = require ('express')
const router = express.Router()
const db = require('../../database')

router.get('/:id', function(req,res) {
    // res.send('Hello from prokemon x')
    db.select('nom').from('pokedex').where({numéro: req.params.id}).then(function(data) {
        res.send(data);
    })
})

router.get('', function(req,res) {
    // res.send('Hello from prokemon x')
    db.select('nom').from('pokedex').then(function(data) {
        res.send(data);
    })
})

module.exports = router