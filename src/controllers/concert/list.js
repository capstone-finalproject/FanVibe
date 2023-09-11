const listConcerts = async (req, res) => {
  const {
    db: { Concert },
    query: { genre },
  } = req;

  try {
    const concerts = await Concert.list({ genre });

    res.send(concerts);
  } catch (err) {
    console.error(err);
  }
};

module.exports = listConcerts;
