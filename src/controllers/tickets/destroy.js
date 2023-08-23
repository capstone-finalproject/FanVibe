const destroy = async (req, res) => {
  const {
    db: { Ticket },
    params: { id },
  } = req
  const result = await Ticket.destroy(id);
  res.sendStatus(result ? 204 : 404);
};
module.exports = destroy;