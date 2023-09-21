const list = require('./list');
const create = require('./create');
const update = require('./update');
const destroy = require('./destroy');

const likeComment = async (req, res) => {
  const {
    db: { Comment }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: {
      likes,
    },
    params: {
      id: commentId,
    },
  } = req;

  try {
    const comment = await Comment.likeComment({
      likes,
      commentId,
    });

    res.send(comment);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  list,
  create,
  update,
  destroy,
  likeComment,
};
