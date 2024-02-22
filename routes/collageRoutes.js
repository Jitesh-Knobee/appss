const express = require("express")
const { educationControllers } = require("../controllers/collageControllers.js");

const router = express.Router();


// education routers =>
router.get("/education/:collageName?", educationControllers)

module.exports = router; 