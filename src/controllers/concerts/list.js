const listConcerts = async (req, res) => {
  const { 
    db: { Concert } // this req.db.User property is put here by the addModelsToRequest middleware
  } = req; 

  const concerts = await Concert.list();
  res.send(concerts);
};

module.exports = listConcerts;