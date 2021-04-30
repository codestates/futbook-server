const express = require("express");
const router = express.Router();
const controller = require("../controllers/sign");

router.post("/siginin", controller.signin);
router.post("/siginup", controller.signup);
router.post("/signout", controller.signout);

module.exports = router;
