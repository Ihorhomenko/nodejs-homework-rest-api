const User = require("../../models/users")

const {sendEmail, verifyEmail, RequestError, validateSchemas} = require("../../helpers")

const resendEmail = async(req, res) => {
    const {error} = validateSchemas.schemaEmailVerify.validate(req.body);
                if(error) {
                throw RequestError(400, "Bad Request")
                }

    const {email} = req.body;

    const user = await User.findOne({email})

        if(!user) {
            throw RequestError(404)
        }

        if(user.verify) {
            throw RequestError(400, "Verification has already been passed")
        }

        const mail = verifyEmail(email, user.verificationToken)

        await sendEmail(mail)

    res.json({
        message: "Verify email send"
    })

}

module.exports = resendEmail