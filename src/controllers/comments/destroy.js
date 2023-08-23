const destroy = async (req, res) => {
  const {
    db: { Comment },
    params: { id },
  } = req
  const result = await Comment.destroy(id);
  res.sendStatus(result ? 204 : 404);
};
module.exports = destroy;