const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    type: { type: String },
    category: { type: String },
    amount: { type: String }
})

const UserSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 0 },
    transactionHistory: [{ type: TransactionSchema, default: {} }],
}, { timestamps: true, collection: 'user' });

module.exports = User = mongoose.model('User', UserSchema, 'user');