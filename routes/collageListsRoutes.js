const express = require("express")
const { collageListControllers } = require("../controllers/collageListsControllers.js");

const router = express.Router();
 

// education routers =>
router.get("/collageLists/:collageName?", collageListControllers)

module.exports = router;  