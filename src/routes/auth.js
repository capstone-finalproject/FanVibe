const express = require('express');

const router = express.Router();

// This will change to auth
const { login, logout } = require('../controllers/auth');
const checkAuthentication = require('../middleware/check-authentication');

// Should probably fall under auth
// Will need a auth middleware as well
router.post('/login', login);
router.delete('/logout', logout);

router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret' });
});

/*

BOOK:
- id
- title
- copies

member:
- id
- name

check_out:
- book_id
- member_id
- checkout_out_on
- returned_on

SELECT book.title AS title, member.name AS name, checked_out.checked_out_on AS FROM check_out
LEFT JOIN book ON check_out.book_id = book.id
LEFT JOIN member ON check_out.member_id = member.id

*/

module.exports = router;
