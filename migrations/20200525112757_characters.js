exports.up = (knex) => {
  return knex.schema.createTable('characters', table => {
    table.increments('id')
    table.string('name')
    // table.string('age')
    table.string('gender')
    table.string('race')
    table.string('job')
    // table.string('height')
    // table.string('weight')
    table.string('origin')
    table.text('description')
    table.text('picture')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('characters')
}
