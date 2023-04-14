const { Router } = require('express');
const userAuthController = require('../controller/UserAuthController')
const router = Router();

router.post('/login', userAuthController.login);

router.post('/signup', userAuthController.signup);

module.exports = router;
