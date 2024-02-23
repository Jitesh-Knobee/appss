const express = require("express");
const { educationDetailControllers, updateEducationDetailControllers, deleteEducationDetailControllers } = require("../controllers/educationDetailControllers.js");

const router = express.Router();

router.post("/educationInfo", educationDetailControllers);
router.put("/educationInfo", updateEducationDetailControllers);
router.delete("/educationInfo", deleteEducationDetailControllers);

module.exports = router;
