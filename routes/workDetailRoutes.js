const express = require("express")
const router = express.Router();


const { workDetailControllers } = require("../controllers/workDetailControllers.js")

router.post("/workInfo", workDetailControllers)

module.exports = router;
