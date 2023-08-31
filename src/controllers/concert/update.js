const { isAuthorized } = require('../../utils/auth-utils');

const updateConcert = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { Concert }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: { location, thumbnail, date }, // this req.body property is put here by the client
    params: { id }, // this req.params.id is a part of the request URL
  } = req;

  // Again, who should really be able to update concerts?
  // Revisit user permissions
  if (!isAuthorized(session.userId, session)) return res.sendStatus(403);

  try {
    const concert = await Concert.find({ id });
    if (!concert) return res.sendStatus(404);

    const updatedConcert = await Concert.update({ location, thumbnail, date });

    res.send(updatedConcert);
  } catch (err) {
    console.error(err);
  }
};

module.exports = updateConcert;
