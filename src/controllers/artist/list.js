const listArtist = async (req, res) => {
  const {
    db: { Artist }, // this req.db.User property is put here by the addModelsToRequest middleware
  } = req;

  try {
    const artist = await Artist.list();

    res.send(artist);
  } catch (err) {
    console.error(err);
  }
};

module.exports = listArtist;
