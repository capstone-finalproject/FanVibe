const createConcert = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Concert }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { name,date,venue,location }, // this req.body property is put here by the client
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const concert = await Concert.create(name,date,venue,location);
    session.userId = user.id;
  
    res.send(concert);
  };
  
  module.exports = createConcert;