const createTicket = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Ticket }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { concert_id, purchase_date,payment_info }, // this req.body property is put here by the client
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const ticket = await Ticket.create(concert_id, purchase_date,payment_info);
    session.userId = user.id;
  
    res.send(ticket);
  };
  
  module.exports = createTicket;