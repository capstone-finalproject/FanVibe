const { isAuthorized } = require('../../utils/auth-utils');

const updateComment = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { Comment }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: { text }, // this req.body property is put here by the client
    params: { id }, // this req.params.id is a part of the request URL
  } = req;

  const { userId } = session;

  if (!isAuthorized(userId, session)) return res.sendStatus(403);

  try {
    const comment = await Comment.find({ id });

    if (!comment) return res.sendStatus(404);

    const updatedComment = await comment.update({ text, userId });

    res.send(updatedComment);
  } catch (err) {
    console.error(err);
  }
};

module.exports = updateComment;
