const registration = require('./register')
const login = require("./login")
const getCurrent = require("./getCurrent")
const logout = require("./logout")
const updateSubscription = require("./updateSubscription")
const verify = require("./verify")

module.exports = {
    registration,
    login,
    getCurrent,
    logout,
    updateSubscription,
    verify,
}