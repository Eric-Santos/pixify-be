const db = require("../data/db-config.js");

module.exports = { find, findById };

function find() {
  return db("songs");
}

function findById(id) {
  return db("songs").where({ id }).first();
}
