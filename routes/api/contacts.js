const express = require('express')

const ctrl = require("../../controllers/contacts")

const router = express.Router()

const {isValidId, authenticate} = require("../../middlewares")


router.get('/', authenticate, ctrl.getAllContacts) 

router.get('/:contactId', authenticate, isValidId, ctrl.getById)

router.post('/', authenticate, ctrl.addContact)

router.put('/:contactId', authenticate, isValidId, ctrl.updateContact)

router.delete('/:contactId', authenticate, isValidId, ctrl.removeContact)

router.patch("/:contactId/favorite", authenticate, isValidId, ctrl.updateFavorite)

module.exports = router
