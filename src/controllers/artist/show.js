const getArtist = async (req, res) => {
  const {
    db: { Artist }, // this req.db.User property is put here by the addModelsToRequest middleware
    params: { id }, // this req.params.id is a part of the request URL
  } = req;

  try {
    const artist = await Artist.find({ id });

    if (!artist) return res.sendStatus(404);

    res.send(artist);
  } catch (err) {
    console.error(err);
  }
};

module.exports = getArtist;
