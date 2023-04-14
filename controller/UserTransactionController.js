const TransactionServices = require('../services/TransactionServices');

module.exports.addBalance = async (req, res, next) => {
    try {
        const { id, amount } = req.body;

        const body = { type: 'add', amount: amount };
        const newData = await TransactionServices.addBalance(id, body);
        return res.json({ success: true, data: newData });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, data: error });
    }
}

module.exports.deductBalance = async (req, res, next) => {
    try {
        const { id, amount } = req.body;

        const body = { type: 'DEDUCT', amount: amount };
        const newData = await TransactionServices.deductBalance(id, body);
        return res.json({ success: true, data: newData });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, data: error });
    }
}


module.exports.getBalance = async (req, res, next) => {
    try {

    } catch (error) {

    }
}