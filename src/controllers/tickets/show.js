const showTicket = async (req, res) => {
    const {
      db: { Ticket }, // this req.db.User property is put here by the addModelsToRequest middleware
      params: { id }, // this req.params.id is a part of the request URL
    } = req;
  
    const ticket = await Ticket.find(id);
    if (!ticket) return res.sendStatus(404);
  
    res.send(ticket);
  };
  
  module.exports = showTicket;