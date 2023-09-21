const listConcerts = async (req, res) => {
  const {
    db: { Concert },
    query: { genre, excludedConcertId },
  } = req;

  try {
    const concerts = await Concert.list({ genre, excludedConcertId });

    res.send(concerts);
  } catch (err) {
    console.error(err);
  }
};

module.exports = listConcerts;
