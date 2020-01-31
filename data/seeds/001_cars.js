exports.seed = async function(knex) {
  await knex("cars").truncate();
  await knex("cars").insert([
    {
      make: "Toyota",
      model: "Camry",
      year: 2008,
      color: "red",
      price: 5999.99,
      sold: false,
      miles: 30000,
      vin: "1HGBH41JXMN109186"
    },
    {
      make: "Honda",
      model: "Accord",
      year: 2012,
      color: "black",
      price: 9999.99,
      sold: false,
      miles: 40000,
      vin: "1HGBH41JXMN109186"
    },
    {
      make: "Suburu",
      model: "Impreza",
      year: 2015,
      color: "silver",
      price: 1200,
      sold: false,
      miles: 60000,
      vin: "1HGBH41JXMN109186"
    },
    {
      make: "Ford",
      model: "Explorer",
      year: 2001,
      color: "forest green",
      price: 4000,
      sold: false,
      miles: 20000,
      vin: "1HGBH41JXMN109186"
    }
  ]);
};
