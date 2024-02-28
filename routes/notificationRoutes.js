const { Router } = require("express")
const { notificationControllers } = require("../controllers/notificationControllers.js")
const router = Router();

router.post("/notification", notificationControllers)

module.exports = router;