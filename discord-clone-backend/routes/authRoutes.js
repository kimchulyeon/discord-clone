// [2]
const express = require('express');
const router = express.Router();

// http://localhost:5002/api/auth/register
router.post('/register', (request, response) => {
  response.send('register route');
});

// http://localhost:5002/api/auth/login
router.post('/login', (request, response) => {
  response.send('login route');
});

module.exports = router;
