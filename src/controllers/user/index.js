const list = require('./list');
const create = require('./create');
const show = require('./show');
const showMe = require('./show-me');

const { isAuthorized } = require('../../utils/auth-utils');

const update = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { User }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: { username }, // this req.body property is put here by the client
  } = req;

  try {
    if (!isAuthorized(session.userId, session)) return res.sendStatus(403);

    const user = await User.find(session.userId);
    if (!user) return res.sendStatus(404);

    const updatedUser = await user.update({ username });
    res.send(updatedUser);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  list,
  create,
  show,
  showMe,
  update,
};
