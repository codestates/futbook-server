const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");
const checkTokenValid = require('../middlewares/checkTokenValid');


router.get("/userinfo/:id", checkTokenValid,controller.userinfo);

module.exports = router;
