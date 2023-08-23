const deleteTicket = async (req, res) => {
    const {
      db: { Ticket },
      params: { concert_id,purchase_date,payment_info},
    } = req
    const result = await Ticket.deleteTicket(concert_id, purchase_date,payment_info);
   
    res.sendStatus(result ? 204 : 404);
  };
  module.exports = deleteTicket;