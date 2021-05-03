const express = require("express");
const router = express.Router();
const controller = require("../controllers/sign");
const checkTokenValid = require("../middlewares/checkTokenValid");

router.post("/signin", controller.signin);
router.post("/signup", controller.signup);
router.get("/signout", checkTokenValid, controller.signout);

module.exports = router;
