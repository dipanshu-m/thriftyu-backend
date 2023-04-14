const UserAuthServices = require('../services/UserAuthServices')

module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserAuthServices.login(email, password);

        return res.json({ success: true, data: user })
    } catch (error) {
        console.log(error);
        return res.json({ success: false, data: 'Invalid emaail or password' });

    }
}

module.exports.signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const createuser = await UserAuthServices.signup(name, email, password);

        return res.json({ success: true, data: createuser });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, data: 'User already exists' });
    }
}