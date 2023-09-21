const express = require('express');

const router = express.Router();
const {
  list,
  create,
  find,
  destroy,
  update,
  getFeaturedEvent,
} = require('../controllers/event');

router.get('/', list);
router.get('/featuredEvent', getFeaturedEvent);
router.get('/:id', find);

router.post('/create', create);

router.put('/:id', update);

router.delete('/:id', destroy);

module.exports = router;
