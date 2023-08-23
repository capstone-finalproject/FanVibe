const { isAuthorized } = require('../../utils/auth-utils');

const updatedConcert = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { Concert }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: { concert_data }, // this req.body property is put here by the client
    params: { id }, // this req.params.id is a part of the request URL
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const concert = await Concert.find(id);
  if (!concert) return res.sendStatus(404);

  const updatedConcert = await Concert.update(concert_data);
  res.send(updatedConcert);
};

module.exports = updatedConcert;
