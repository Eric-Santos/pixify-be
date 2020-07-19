const db = require("../data/db-config.js");

module.exports = { find, findById };

function find() {
  return db("photos");
}

function findById(id) {
  return db("photos").where({ id }).first();
}
