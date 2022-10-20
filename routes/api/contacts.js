const express = require('express')

const ctrl = require("../../controllers/contacts")

const router = express.Router()

const {isValidId} = require("../../middlewares")


router.get('/', ctrl.getAllContacts) 

router.get('/:contactId', isValidId, ctrl.getById)

router.post('/', ctrl.addContact)

router.put('/:contactId', isValidId, ctrl.updateContact)

router.delete('/:contactId', isValidId, ctrl.removeContact)

router.patch("/:contactId/favorite", isValidId, ctrl.updateFavorite)

module.exports = router
