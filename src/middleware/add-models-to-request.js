const User = require('../db/models/user');
const Ticket = require('../db/models/ticket');
const Concert = require('../db/models/concert');
const Comment = require('../db/models/comment');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Ticket,
    Concert,
    Comment,
  };
  next();
};

module.exports = addModelsToRequest;
