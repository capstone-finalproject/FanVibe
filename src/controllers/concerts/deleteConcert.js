const deleteConcert = async (req, res) => {
    const {
      db: { Concert },
      params: { name,date,venue,location},
    } = req
    const result = await Concert.deleteConcert(name,date,venue,location);
   
    res.sendStatus(result ? 204 : 404);
  };
  module.exports = deleteConcert;