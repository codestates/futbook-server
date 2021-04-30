const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

router.get("/userinfo", controller.userinfo);

module.exports = router;
