const { isAuthorized } = require('../../utils/auth-utils');

const updateTicket = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { Ticket }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: { ticket_data }, // this req.body property is put here by the client
    params: { id }, // this req.params.id is a part of the request URL
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const ticket = await Ticket.find(id);
  if (!ticket) return res.sendStatus(404);

  const updatedTicket = await Ticket.update(ticket_data);
  res.send(updatedTicket);
};

module.exports = updateTicket;
