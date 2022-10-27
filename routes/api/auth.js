const express = require('express')

const ctrl = require("../../controllers/auth")

const router = express.Router()

router.post("/signup", ctrl.registration)

module.exports = router;