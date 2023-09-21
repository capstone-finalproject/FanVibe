const knex = require('../db/knex');

class Venue {
  constructor({ id, address, name, city, state, postal_code, country, website }) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.postalCode = postal_code;
    this.country = country;
    this.website = website;
  }

  static async list() {
    // Should left join for user data
    const venues = await knex
      .select('*')
      .from('venue');

    return venues.map((venue) => new Venue(venue));
  }

  static async find({ id }) {
    const [venue] = await knex
      .select('*')
      .from('venue')
      .where({ id })
      .returning('*');

    return venue ? new Venue(venue) : null;
  }

  static async create({address, name, city, state, postalCode, country, website }) {
    const [venue] = await knex('venue')
      .insert({
        address, name, city, state, postal_code: postalCode, country, website 
      })
      .returning('*');

    return new Venue(venue);
  }

  static async delete({ id }) {
    return knex('venue').del().where({ id });
  }

  static async deleteAll() {
    return knex('venue').del();
  }

  update = async ({ address, name, city, state, postalCode, country, website }) => {
    const [updatedVenue] = await knex('venue')
      .where({ id: this.id })
      .update({ address, name, city, state, postal_code: postalCode, country, website })
      .returning('*');

    return updatedVenue ? new Venue(updatedVenue) : null;
  };
}

module.exports = Venue;
