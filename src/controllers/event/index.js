const create = async (req, res) => {
  const {
    db: { Event },
    body: {
      name,
      date,
      venueId,
      concertId,
      thumbnail,
    },
  } = req;

  try {
    const event = await Event.create({ name, date, venueId, concertId, thumbnail });

    res.send(event);
  } catch (err) {
    console.error(err);
  }
};

const find = async (req, res) => {
  const {
    db: { Event },
    params: {
      id,
    },
  } = req;

  try {
    const event = await Event.find({ id });

    res.send(event);
  } catch (err) {
    console.error(err);
  }
};

const list = async (req, res) => {
  const {
    db: { Event },
    query: {
      genre,
      concertId,
      excludedEventId,
    },
  } = req;

  try {
    const event = await Event.list({ genre, concertId, excludedEventId });

    res.send(event);
  } catch (err) {
    console.error(err);
  }
};

const destroy = async (req, res) => {
  const {
    db: { Event },
    params: {
      id,
    },
  } = req;

  try {
    const event = await Event.delete({ id });

    res.send(event);
  } catch (err) {
    console.error(err);
  }
};

const update = async (req, res) => {
  const {
    db: { Event },
    body: {
      name,
      venueId,
      thumbnail,
    },
  } = req;

  try {
    const event = await Event.delete({ name, venueId, thumbnail });

    res.send(event);
  } catch (err) {
    console.error(err);
  }
};

const getFeaturedEvent = async (req, res) => {
  const {
    db: { Event },
  } = req;

  try {
    const event = await Event.featuredEvent();

    res.send(event);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  find,
  list,
  create,
  update,
  destroy,
  getFeaturedEvent,
};
