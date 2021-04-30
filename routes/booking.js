const express = require("express");
const router = express.Router();
const controller = require("../controllers/booking");

router.post("/bookfutsal", controller.bookfutsal);
router.delete("/cancelbook", controller.cancelbook);
router.get("/checkbook", controller.checkbook);

module.exports = router;
