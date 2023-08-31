const User = require('../models/user');
const Ticket = require('../models/ticket');
const Concert = require('../models/concert');
const Comment = require('../models/comment');

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
