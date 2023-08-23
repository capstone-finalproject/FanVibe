const { isAuthorized } = require('../../utils/auth-utils');

const updateComment = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { Comment }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: { comment }, // this req.body property is put here by the client
    params: { id }, // this req.params.id is a part of the request URL
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const comments = await Comment.find(id);
  if (!comments) return res.sendStatus(404);

  const updatedComment = await comments.update(comment);
  res.send(updatedComment);
};

module.exports = updateComment;
