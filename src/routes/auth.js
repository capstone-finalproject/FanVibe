const express = require('express');

const router = express.Router();

// This will change to auth
const { login, logout } = require('../controllers/auth');
const checkAuthentication = require('../middleware/check-authentication');

// Should probably fall under auth
// Will need a auth middleware as well
router.post('/login', login);
router.post('/logout', logout);

router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret' });
});

module.exports = router;
