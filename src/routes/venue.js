const express = require('express');

const router = express.Router();

const { list, create, find, update, destroy } = require('../controllers/venue');

router.get('/', list);
router.get('/:id', find);

router.post('/create', create);

router.put('/:id', update);

router.delete('/:id', destroy);

module.exports = router;
