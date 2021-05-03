const express = require("express");
const router = express.Router();
const controller = require("../controllers/booking");
const checkTokenValid = require("../middlewares/checkTokenValid");

router.post("/bookfutsal", checkTokenValid, controller.bookfutsal);
router.delete("/cancelbook", controller.cancelbook);
router.get("/checkbook", controller.checkbook);

module.exports = router;
