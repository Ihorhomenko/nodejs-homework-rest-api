const {BASE_URL} = process.env

const verifyEmail = (email, verificationToken) => {
    const mail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`
    }

    return mail;

}

module.exports = verifyEmail