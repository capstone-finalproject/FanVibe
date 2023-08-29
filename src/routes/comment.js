const express = require('express');

const router = express.Router();
const { list, create, update, destroy } = require('../controllers/comments');

router.get('/', list);

router.post('/', create);

router.put('/:id', update);

router.delete('/:id', destroy);

module.exports = router;
