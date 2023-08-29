const User = require('../../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Should i be using the models here?
// Or just directly use knex
exports.seed = async (knex) => {
  // Check into this
  await User.deleteAll();
  // needs email and passwords
  await User.create({
    username: "cool_cat",
    password: "1234",
    first_name: "jackie",
    last_name: "lopez",
    email: "jackielopez@emaill.com",
  });
  // await User.create('l33t-guy', '1234');
  // await User.create('wowow', '1234');
};
