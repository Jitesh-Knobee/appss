const express = require("express")
const router = express.Router();
const { workDetailControllers, workUpdateControllers, workDeleteControllers } = require("../controllers/workDetailControllers.js")

// Post router =>
router.post("/workInfo", workDetailControllers)

// Update router =>
router.put("/workInfo", workUpdateControllers);

// Delete router =>
router.delete("/workInfo", workDeleteControllers);


module.exports = router;
