exports.up = async function(knex) {
  await knex.schema.createTable("cars", table => {
    table.increments("id");
    table.text("make").notNull();
    table.text("model").notNull();
    table.integer("year", 4).notNull();
    table.float("price", 6, 2).notNull();
    table.boolean("sold").defaultTo(false);
    table.integer("miles", 6).notNull();
    table.string("vin", 17).notNull();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars");
};
