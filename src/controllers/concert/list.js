const listConcerts = async (req, res) => {
  const {
    db: { Concert },
  } = req;

  try {
    const concerts = await Concert.list();

    res.send(concerts);
  } catch (err) {
    console.error(err);
  }
};

module.exports = listConcerts;
