const express = require("express");
const router = express.Router();
const controller = require("../controllers/booking");
const checkTokenValid = require("../middlewares/checkTokenValid");

router.post("/bookfutsal", controller.bookfutsal);
router.delete("/cancelbook", controller.cancelbook);
router.get("/checkbook/:id", checkTokenValid, controller.checkbook);

module.exports = router;
