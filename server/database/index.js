const knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'postgres',
        database: 'pokemon',
        port: 5432,
        host: 'localhost',
        password: 'smith'
    },
    debug: false
    });

module.exports = knex;