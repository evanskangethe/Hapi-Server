// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {

      host: '127.0.0.1',

      user:'root',
      password: '',

      database: 'my_db',
      charset: 'utf8',
    },

    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      tableName: './seeds'
    }
  },
};
