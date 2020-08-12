
exports.up = function(knex) {
  return knex.schema.createTable("goals" ,table => {
        table.increments()
        table.integer("userId").references("id").inTable("users")
        table.integer("goalWeight")
        table.text("goalDate")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("goals")
};
