const bcrypt = require("bcryptjs")

const User = require('../../models/users')

const registration = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user) {
        const error = new Error("Email in use")
        error.status = 409;
        throw error;
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const result = await User.create({email, password: hashPassword});

    res.status(201).json({
        status: "sucsses",
        email: result.email,
    })
}


module.exports = registration