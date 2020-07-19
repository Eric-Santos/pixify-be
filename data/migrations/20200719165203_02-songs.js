exports.up = function (knex) {
  return knex.schema.createTable("songs", (tbl) => {
    tbl.increments();
    tbl.text("song_url");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("songs");
};
