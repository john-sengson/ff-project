exports.up = (knex) => {
  return knex.schema.createTable('category', table => {
    table.increments('id')
    table.string('origin')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('category')
}

