const knex = require('../db/knex');

class Artist {
  constructor({ id, genre, bio, name }) {
    this.id = id;
    this.name = name;
    this.bio = bio;
    this.genre = genre;
  }

  static async list() {
    // Should left join for user data
    const artists = await knex
      .select('*')
      .from('artist');

    return artists.map((artist) => new Artist(artist));
  }

  static async find({ id }) {
    const [artist] = await knex
      .select('*')
      .from('artist')
      .where({ id })
      .returning('*');

    return artist ? new Artist(artist) : null;
  }

  static async create({ name, thumbnail, bio, genre }) {
    const [artist] = await knex('artist')
      .insert({
        bio,
        name,
        genre,
        thumbnail,
      })
      .returning('*');

    return new Artist(artist);
  }

  static async delete({ id }) {
    return knex('artist').del().where({ id });
  }
  static async deleteAll() {
    return knex('artist').del();
  }

  update = async ({ genre, bio, name, thumbnail }) => {
    const [updatedArtist] = await knex('artist')
      .where({ id: this.id })
      .update({ genre, bio, name, thumbnail })
      .returning('*');

    return updatedArtist ? new Artist(updatedArtist) : null;
  };
}

module.exports = Artist;
