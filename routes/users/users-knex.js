const db = require("../config/knex-config");

async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}
module.exports = { add };
