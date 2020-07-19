const db = require("../data/db-config.js");

module.exports = { find, findById };

function find() {
  return db("api");
}

function findById(id) {
  return db("api").where({ id }).first();
}
