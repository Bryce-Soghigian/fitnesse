
exports.up = function(knex) {
  return knex.schema.createTable("fitnessData", table => {
      table.increments();
      table.integer("userId").references("id").inTable("users");
      table.integer("weight")
      table.integer("calorieCount")
      table.string("currentDate").notNullable();
      table.text("workoutDuration")

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("fitnessData")
};
