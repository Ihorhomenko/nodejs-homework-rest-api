const User = require("../../models/users")

const {RequestError} = require("../../helpers")

const verify = async (req, res) => {
    const {verificationToken} = req.params;
    console.log(verificationToken)
    const user = await User.findOne({verificationToken})

    if(!user) {
        throw RequestError(404, "Not found user")
    }

    await User.findByIdAndUpdate(user._id, {verify: true, verificationToken: ""})

    res.status(200).json({
        mesage: "Verifu success"
    })
}

module.exports = verify;