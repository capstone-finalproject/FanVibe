const express = require('express');

const router = express.Router();
const { list, create, update, destroy, likeComment } = require('../controllers/comments');

router.get('/', list);

router.post('/', create);

router.patch('/:id', update);

router.delete('/:id', destroy);

router.patch('/:id/like', likeComment);

module.exports = router;
