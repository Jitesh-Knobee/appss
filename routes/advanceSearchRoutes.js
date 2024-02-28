const { Router } = require("express")
const { advanceSearchControllers } = require("../controllers/advanceSearchControllers.js")

const router = Router();

router.post("/advanceSearch", advanceSearchControllers)

module.exports = router;
