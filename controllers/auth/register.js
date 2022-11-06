const bcrypt = require("bcryptjs")
const gravatar = require("gravatar")

const User = require('../../models/users')
const {validateSchemas} = require("../../helpers")

const registration = async (req, res, next) => {
    const {email, password} = req.body;
    const {error} = validateSchemas.schemaUser.validate(req.body);
                if(error) {
                const error = new Error("Bad Request")
                error.status = 400;
                throw error;
                }
    const user = await User.findOne({email});
    if(user) {
        const error = new Error("Email in use")
        error.status = 409;
        throw next(error);
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const avatarURL = gravatar.url(email);
    const result = await User.create({email, password: hashPassword, avatarURL});

    res.status(201).json({
        "user": {
            email: result.email,
            subscription: "starter"
          }
    })
}


module.exports = registration