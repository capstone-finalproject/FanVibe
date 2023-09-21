const User = require('../models/user');
const Event = require('../models/event');
const Concert = require('../models/concert');
const Comment = require('../models/comment');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Event,
    Concert,
    Comment,
  };
  next();
};

module.exports = addModelsToRequest;
