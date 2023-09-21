const create = async (req, res) => {
  const {
    db: { Venue },
    body: { address, name, city, state, postalCode, country, website },
  } = req;

  try {
    const venue = await Venue.create({
      address, name, city, state, postalCode, country, website,
    });

    res.send(venue);
  } catch (err) {
    console.error(err);
  }
};

const find = async (req, res) => {
  const {
    db: { Venue },
    params: { id },
  } = req;

  try {
    const venue = await Venue.find({ id });

    res.send(venue);
  } catch (err) {
    console.error(err);
  }
};

const list = async (req, res) => {
  const {
    db: { Venue },
  } = req;

  try {
    const venue = await Venue.list();

    res.send(venue);
  } catch (err) {
    console.error(err);
  }
};

const destroy = async (req, res) => {
  const {
    db: { Venue },
    params: { id },
  } = req;

  try {
    const venue = await Venue.delete({ id });

    res.send(venue);
  } catch (err) {
    console.error(err);
  }
};

const update = async (req, res) => {
  const {
    db: { Venue },
    body: { address, name, city, state, postalCode, country, website },
  } = req;

  try {
    const venue = await Venue.update({ address, name, city, state, postalCode, country, website });

    res.send(venue);
  } catch (err) {
    console.error(err);
  }
};

const getFeaturedVenue = async (req, res) => {
  const {
    db: { Venue },
  } = req;

  try {
    const venue = await Venue.featuredVenue();

    res.send(venue);
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
  getFeaturedVenue,
};
