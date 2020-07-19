exports.up = function (knex) {
  return knex.schema.createTable("images", (tbl) => {
    tbl.increments();
    tbl.integer("width");
    tbl.integer("height");
    tbl.text("url");
    tbl.text("photographer");
    tbl.text("photographer_url");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("images");
};
