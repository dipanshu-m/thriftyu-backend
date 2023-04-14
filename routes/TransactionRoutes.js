const { Router } = require('express');
const UserTransactionController = require('../controller/UserTransactionController')
const router = Router();

router.get('/', UserTransactionController.getBalance);

router.post('/add', UserTransactionController.addBalance);

router.post('/remove', UserTransactionController.deductBalance);

module.exports = router;
