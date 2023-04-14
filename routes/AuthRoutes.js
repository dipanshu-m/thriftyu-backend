const { Router } = require('express');
const router = Router();

router.post('/signup', (req, res, next) => {
  res.send('working');
});

router.get('/login', (req, res, next) => {
  res.send('working');
});

module.exports = router;
