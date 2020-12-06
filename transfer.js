// create table Bookstemp(values text);                    

// copy Bookstemp from 'BOOKS_DATANew.json';

// create table books(valjson json);

// Insert into books
// select values
// from   (
//            select json_array_elements(replace(values,'\','\\')::json) as values 
//            from   Bookstemp
//        ) a;

const fs = require('fs')
const knex = require('knex')({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'smith',
        database : 'pokemon'
    }
})

knex.schema.createTable('pokedex', (table) => {
    table.increments()
    table.string('niveau')
    table.string('nom')
    table.string('puissance')
    table.string('precision')
    table.string('pp')
}).then(function(message){
    console.log(message)
    process.exit(0)
})