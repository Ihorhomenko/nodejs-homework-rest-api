const express = require('express')

const ctrl = require("../../controllers/auth")

const {authenticate, upload} = require("../../middlewares")


const router = express.Router()

router.post("/signup", ctrl.registration)
router.post("/login", ctrl.login)
router.get("/current", authenticate, ctrl.getCurrent)
router.get("/logout", authenticate, ctrl.logout)
router.patch("/subscription", authenticate, ctrl.updateSubscription)
router.patch("/avatar", authenticate, upload.single("avatar"), ctrl.updateAvatar )

module.exports = router;