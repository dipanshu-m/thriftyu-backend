const UserModel = require('../model/User');

module.exports.addBalance = async (id, body) => {
    const user = await UserModel.findById(id);
    const newBalance = user.balance + body.amount;
    await appendTransactionToUser(id, body);
    return await UserModel.findByIdAndUpdate(id, { balance: newBalance }, { new: true });
}

async function appendTransactionToUser(id, transactionHistory) {
    await UserModel.findByIdAndUpdate(id, { $push: transactionHistory }, { new: true });
    return true;
}


module.exports.deductBalance = async (id, body) => {
    const user = await UserModel.findById(id);
    const newBalance = user.balance - body.amount;
    if (newBalance < 0) {
        throw 'Insufficient Balance';
    };
    await appendTransactionToUser(id, body);
    return await UserModel.findByIdAndUpdate(id, { balance: newBalance }, { new: true });
}