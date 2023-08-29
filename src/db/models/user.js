const knex = require('../db/knex');

const { hashPassword, isValidPassword } = require('../utils/auth-utils');

class User {
  #passwordHash = null; // a private property

  constructor({ id, username, password }) {
    // Might display other values like name and such
    this.id = id;
    this.username = username;
    this.#passwordHash = password;
  }

  static async list() {
    const users = await knex.select('*').from('user');

    return users.map((user) => new User(user));
  }

  static async find(id) {
    const [user] = await knex
      .select('*')
      .from('user')
      .where('id', id)
      .returning('*');

    return user ? new User(user) : null;
  }

  static async findByUsername(username) {
    const [user] = await knex
      .select('*')
      .from('user')
      .where('username', 'ilike', username)
      .returning('*');

    return user ? new User(user) : null;
  }

  static async create({ username, password, firstName, lastName, email }) {
    // Change fields to camel case when accepting
    const hashedPassword = await hashPassword(password);

    const [user] = await knex('user')
      .insert({
        email,
        username,
        password: hashedPassword,
        first_name: firstName,
        last_name: lastName,
      })
      .returning('*');

    return new User(user);
  }

  static async deleteAll() {
    return knex('user').del();
  }

  update = async ({ username }) => {
    // Should we be able to update other fields?
    const [updatedUser] = await knex('user')
      .where({ id: this.id })
      .update({ username })
      .returning('*');

    return updatedUser ? new User(updatedUser) : null;
  };

  isValidPassword = async (password) => (
    isValidPassword(password, this.#passwordHash)
  );
}

module.exports = User;
