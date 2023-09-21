const createConcert = async (req, res) => {
  const {
    db: { Concert },
    body: {
      name,
      artistId,
      thumbnail,
    },
  } = req;

  // Who should be able to create concerts? Maybe have tiers for users?

  // TODO: check if username is taken, what should you return?
  try {
    const concert = await Concert.create({ name, artistId, thumbnail });

    res.send(concert);
  } catch (err) {
    console.error(err);
  }
};

module.exports = createConcert;
