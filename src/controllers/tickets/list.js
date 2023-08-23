const listTicket = async (req, res) => {
    const { 
      db: { Ticket } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const ticket = await Ticket.list();
    res.send(ticket);
  };
  
  module.exports = listTicket;