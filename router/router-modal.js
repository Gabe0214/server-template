const knex = require('knex')
const knexConfig = require('../knexfile')

const dataBase = knex(knexConfig.development)