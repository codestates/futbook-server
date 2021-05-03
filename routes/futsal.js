const express = require("express");
const router = express.Router();
const controller = require("../controllers/futsal");

router.get("/allinfo", controller.allinfo);

module.exports = router;
