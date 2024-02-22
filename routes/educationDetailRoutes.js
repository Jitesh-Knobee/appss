const express = require("express");
const { educationDetailControllers } = require("../controllers/educationDetailControllers.js");

const router = express.Router();

router.post("/educationInfo", educationDetailControllers);

module.exports = router;
