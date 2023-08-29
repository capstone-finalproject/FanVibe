const { isAuthorized } = require('../../utils/auth-utils');

const deleteComment = async (req, res) => {
  const {
    session,
    db: { Comment },
    params: { id },
  } = req;

  if (!isAuthorized(session.userId, session)) return res.sendStatus(403);

  try {
    const result = await Comment.delete({ id });

    res.sendStatus(result ? 204 : 404);
  } catch (err) {
    console.error(err);
  }
};

module.exports = deleteComment;
