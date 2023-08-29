const express = require('express');

const router = express.Router();

const {
  list,
  create,
  show,
  showMe,
  update,
} = require('../controllers/user');
const checkAuthentication = require('../middleware/check-authentication');

router.get('/', list);
router.get('/me', showMe);
router.get('/:id', show);

router.post('/create', create);

router.put('/me/update', checkAuthentication, update);

module.exports = router;
