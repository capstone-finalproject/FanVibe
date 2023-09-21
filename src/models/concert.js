const knex = require("../db/knex");

class Concert {
  constructor({ id, name, location, date, artistName, genre, thumbnail, bio, event_count }) {
    this.id = id;
    this.name = name;
    this.date = date;

    // This may change to country/state
    // And will instead have a venue location value
    // May further split this out to concert and events
    this.location = location;
    this.artist = {
      bio,
      genre,
      name: artistName,
    };
    this.genre = genre;
    this.thumbnail = thumbnail;
    this.eventCount = event_count;
  }

  static async list({ genre, excludedConcertId }) {
    const query = knex("concert")
      .select(
        "artist.name as artistName",
        "artist.genre as genre",
        "artist.bio as bio",
        "concert.*",
        knex.raw(
          "(SELECT COUNT(*) FROM event WHERE event.concert_id = concert.id) as event_count",
        ),
      )
      .leftJoin("artist", "artist.id", "concert.artist_id");

    if (genre) query.where("genre", "ilike", genre);
    if (excludedConcertId) query.whereNot('concert.id', excludedConcertId);

    const concerts = await query;
console.log(concerts);
    return concerts.map((concert) => new Concert(concert));
  }

  static async find({ id }) {
    const [concert] = await knex("concert")
      .select(
        "artist.name as artistName",
        "artist.genre as genre",
        "artist.bio as bio",
        "concert.*",
        knex.raw(
          "(SELECT COUNT(*) FROM event WHERE event.concert_id = concert.id) as event_count",
        ),
      )
      .join("artist", "artist.id", "concert.artist_id")
      .where("concert.id", "=", id);

    return concert ? new Concert(concert) : null;
  }

  static async create({ artistId, thumbnail, name }) {
    const [concert] = await knex("concert")
      .insert({
        name,
        artist_id: artistId,
        thumbnail,
      })
      .returning("*");

    return new Concert(concert);
  }
  static async deleteAll() {
    return knex('concert').del();
  }

  static async delete({ id }) {
    return knex("concert").del().where({ id });
  }

  update = async ({ location, date, thumbnail }) => {
    const [updatedConcert] = await knex("concert")
      .where({ id: this.id })
      .update({ thumbnail, location, date })
      .returning("*");

    return updatedConcert ? new Concert(updatedConcert) : null;
  };
}

module.exports = Concert;
