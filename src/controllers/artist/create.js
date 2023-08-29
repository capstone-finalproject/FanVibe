const createArtist = async (req, res) => {
  const {
    db: { Artist },
    body: {
      bio,
      name,
      genre,
      thumbnail,
    },
  } = req;

  try {
    const artist = await Artist.create({
      bio,
      name,
      genre,
      thumbnail,
    });

    res.send(artist);
  } catch (err) {
    console.error(err);
  }
};

module.exports = createArtist;
