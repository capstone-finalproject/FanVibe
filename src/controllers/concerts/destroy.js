const destroy = async (req, res) => {
  const {
    db: { Concert },
    params: { id },
  } = req
  const result = await Concert.destroy(id);
  res.sendStatus(result ? 204 : 404);
};
module.exports = destroy;