const getConcert = async (req, res) => {
  const {
    db: { Concert }, // this req.db.User property is put here by the addModelsToRequest middleware
    params: { id }, // this req.params.id is a part of the request URL
  } = req;

  try {
    const concert = await Concert.find({ id });

    if (!concert) return res.sendStatus(404);

    res.send(concert);
  } catch (err) {
    console.error(err);
  }
};

module.exports = getConcert;
