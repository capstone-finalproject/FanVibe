const destroy = async (req, res) => {
  const {
    db: { Artist },
    params: { id },
  } = req;

  try {
    const result = await Artist.delete({ id });

    res.sendStatus(result ? 204 : 404);
  } catch (err) {
    console.error(err);
  }
};

module.exports = destroy;
