const knex = require("../db/knex");

class Event {
  constructor({
    id,
    name,
    date,
    artistName,
    genre,
    thumbnail,
    bio,
    concert_id,
    city,
    state,
    country,
    venueName,
    address,
    lineUp,
    postalCode,
    website,
  }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.concertId = concert_id;
    this.artist = {
      bio,
      genre,
      name: artistName,
    };
    this.venue = {
      city,
      state,
      country,
      address,
      postalCode,
      website,
      name: venueName,
    };
    this.lineUp = lineUp;
    this.genre = genre;
    this.thumbnail = thumbnail;
  }

  static async list({ genre, concertId, excludedEventId }) {
    const query = knex("event")
      .select(
        "event.*",
        "artist.bio as bio",
        "artist.genre as genre",
        "artist.name as artistName",
        "venue.name AS venueName",
        "venue.city AS city",
        "venue.state AS state",
        "venue.country AS country",
      )
      .leftJoin("concert", "concert.id", "event.concert_id")
      .leftJoin("artist", "artist.id", "concert.artist_id")
      .leftJoin("venue", "venue.id", "event.venue_id");

    if (genre) {
      query.where("genre", "ilike", genre);
    }

    if (concertId) {
      query.where("event.concert_id", "=", concertId);
    }

    if (excludedEventId) {
      query.whereNot('event.id', excludedEventId);
    }

    const events = await query;

    return events.map((event) => new Event(event));
  }

  static async find({ id }) {
    const [event] = await knex("event")
      .select(
        "event.*",
        "artist.bio as bio",
        "artist.genre as genre",
        "artist.name as artistName",
        "venue.name AS venueName",
        "venue.city AS city",
        "venue.state AS state",
        "venue.country AS country",
        "venue.address AS address",
        "venue.postal_code AS postalCode",
        "venue.website AS website",
      )
      .leftJoin("concert", "concert.id", "event.concert_id")
      .leftJoin("artist", "artist.id", "concert.artist_id")
      .leftJoin("venue", "venue.id", "event.venue_id")
      .where("event.id", "=", id);

    const lineUp = await knex('artist')
      .select('artist.*')
      .leftJoin('event_artist', 'event_artist.artist_id', 'artist.id')
      .leftJoin('event', 'event.id', 'event_artist.event_id')
      .where('event_artist.event_id', id);

    return event ? new Event({ ...event, lineUp }) : null;
  }

  static async create({ concertId, name, venueId, date, thumbnail }) {
    const [event] = await knex("event")
      .insert({
        name,
        date,
        thumbnail,
        venue_id: venueId,
        concert_id: concertId,
      })
      .returning("*");

    return new Event(event);
  }

  static async featuredEvent() {
    const [event] = await knex('event as e')
      .select('e.*', 'artist.genre as genre')
      .leftJoin('comment as c', 'e.id', 'c.event_id')
      .leftJoin("concert", "concert.id", "e.concert_id")
      .leftJoin("artist", "artist.id", "concert.artist_id")
      .count('c.id as comment_count')
      .groupBy('e.id', 'e.name', 'genre')
      .orderBy('comment_count', 'desc')
      .limit(1);

    return new Event(event);
  }

  static async delete({ id }) {
    return knex("event").del().where({ id });
  }
  static async deleteAll() {
    return knex('event').del();
  }

  update = async ({ location, date, thumbnail }) => {
    const [updatedEvent] = await knex("event")
      .where({ id: this.id })
      .update({ thumbnail, location, date })
      .returning("*");

    return updatedEvent ? new Event(updatedEvent) : null;
  };
}

module.exports = Event;
