
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tweets', function (table) {
    table.increments('id').primary();
    table.string('messages', 250);
    table.string('image_url');
    table.boolean('liked');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tweets');  
};
