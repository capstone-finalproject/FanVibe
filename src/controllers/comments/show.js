const showComment = async (req, res) => {
  const {
    db: { Comment }, // this req.db.User property is put here by the addModelsToRequest middleware
    params: { id }, // this req.params.id is a part of the request URL
  } = req;

  const comment = await Comment.find(id);
  if (!comment) return res.sendStatus(404);

  res.send(comment);
};

module.exports = showComment;