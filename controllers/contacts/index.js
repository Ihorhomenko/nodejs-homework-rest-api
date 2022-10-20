const getAllContacts = require("./getAllContacts")
const getById = require("./getById")
const addContact = require("./addContact")
const updateContact = require("./updateContact")
const updateFavorite = require("./updateFavorite")
const removeContact = require("./removeContact")

module.exports = {
    getAllContacts,
    getById,
    addContact,
    updateContact,
    updateFavorite,
    removeContact,
}