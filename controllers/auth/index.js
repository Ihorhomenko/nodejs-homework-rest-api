const registration = require('./register')
const login = require("./login")
const getCurrent = require("./getCurrent")
const logout = require("./logout")
const updateSubscription = require("./updateSubscription")
const updateAvatar = require("./updateAvatar")

module.exports = {
    registration,
    login,
    getCurrent,
    logout,
    updateSubscription,
    updateAvatar,
}