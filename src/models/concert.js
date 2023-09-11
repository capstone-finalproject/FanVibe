const knex = require('../db/knex');

class Concert {
  constructor({ id, name, location, date, artistName, genre, thumbnail }) {
    this.id = id;
    this.name = name;
    this.date = date;

    // This may change to country/state
    // And will instead have a venue location value
    // May further split this out to concert and events
    this.location = location;
    this.artist = {
      name: artistName,
      genre,
    };
    this.genre = genre;
    this.thumbnail = thumbnail;
  }

  static async list({ genre }) {
    const query = knex('concert')
      .select('artist.name as artistName', 'artist.genre as genre', 'concert.*')
      .join('artist', 'artist.id', 'concert.artist_id');

    if (genre) query.where('genre', 'ilike', genre);

    const concerts = await query;

    return concerts.map((concert) => new Concert(concert));
  }

  static async find({ id }) {
    const [concert] = await knex('concert')
      .join('artist', 'artist.id', 'concert.artist_id')
      .where({ id });

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

  static async deleteAll() {
    return knex('concert').del();
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
