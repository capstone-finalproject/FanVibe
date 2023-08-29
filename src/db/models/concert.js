const knex = require('../db/knex');

class Concert {
  constructor({ id, name, location, date }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.location = location;
  }

  static async list() {
    // Should left join for user data
    const concerts = await knex
      .select('*')
      .from('concert');

    return concerts.map((concert) => new Concert(concert));
  }

  static async find({ id }) {
    const [concert] = await knex
      .select('*')
      .from('concert')
      .where({ id })
      .returning('*');

    return concert ? new Concert(concert) : null;
  }

  static async create({ artistId, location, date, thumbnail, name }) {
    const [concert] = await knex('concert')
      .insert({
        name,
        date,
        artist_id: artistId,
        location,
        thumbnail,
      })
      .returning('*');

    return new Concert(concert);
  }

  static async delete({ id }) {
    return knex('concert').del().where({ id });
  }

  update = async ({ location, date, thumbnail }) => {
    const [updatedConcert] = await knex('concert')
      .where({ id: this.id })
      .update({ thumbnail, location, date })
      .returning('*');

    return updatedConcert ? new Concert(updatedConcert) : null;
  };
}

module.exports = Concert;
