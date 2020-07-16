
exports.up = function(knex) {
  return knex.schema.createTable("images", table => {
      table.increments();
      table.integer("userId").references("id").inTable("users");
      table.text("imageUrl").unique();
      table.text("currentDate").unique();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("images")
};
