const UserModel = require('../model/User');

module.exports.signup = async (name, email, password) => {
    const user = await UserModel.create({ name, email, password });
    return user;
}


module.exports.login = async (email, password) => {
    const user = await UserModel.findOne({ $and: [{ email: email }, { password }, { password }] });
    if (user == null) {
        throw 'No User exists. Sign up'
    }
    return user;
}