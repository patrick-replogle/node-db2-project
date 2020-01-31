exports.up = async function(knex) {
  await knex.schema.alterTable("cars", table => {
    table.string("color", 30);
  });
};

exports.down = async function(knex) {
  await knex.schema.alterTable("cars", table => {
    table.dropColumn("color");
  });
};
