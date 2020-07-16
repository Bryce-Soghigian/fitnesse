
exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
      table.increments();
      table.text("fullname",128).notNullable();
      table.text("email",128).notNullable();
      table.text("password",128).notNullable()

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users")
};
