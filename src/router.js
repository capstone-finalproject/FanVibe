const express = require('express');

const router = express.Router();

const authRouter = require('./routes/auth');
const commentRouter = require('./routes/comment');
const concertRouter = require('./routes/concert');
const userRouter = require('./routes/users');
const artistRouter = require('./routes/artist');
const eventRouter = require('./routes/event');
const venueRouter = require('./routes/venue');

router.use('/auth', authRouter);
router.use('/artist', artistRouter);
router.use('/comment', commentRouter);
router.use('/concert', concertRouter);
router.use('/user', userRouter);
router.use('/event', eventRouter);
router.use('/venue', venueRouter);

module.exports = router;
