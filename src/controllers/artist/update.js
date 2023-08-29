const { isAuthorized } = require('../../utils/auth-utils');

const updateArtist = async (req, res) => {
  const {
    session,
    db: { Artist },
    body: {
      bio,
      name,
      genre,
      thumbnail,
    },
    params: { id },
  } = req;

  try {
    if (!isAuthorized(session.userId, session)) return res.sendStatus(403);

    const artist = await Artist.find({ id });

    if (!artist) return res.sendStatus(404);

    const updatedArtist = await artist.update({
      bio,
      name,
      genre,
      thumbnail,
    });

    res.send(updatedArtist);
  } catch (err) {
    console.error(err);
  }
};

module.exports = updateArtist;
