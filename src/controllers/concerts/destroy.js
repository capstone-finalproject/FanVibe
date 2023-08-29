const deleteConcert = async (req, res) => {
  const {
    db: { Concert },
    params: { id },
  } = req;

  try {
    const result = await Concert.deleteConcert({ id });

    res.sendStatus(result ? 204 : 404);
  } catch (err) {
    console.error(err);
  }
};

module.exports = deleteConcert;
