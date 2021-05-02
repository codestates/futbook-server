const { User } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res
      .status(400)
      .send({ message: "No authorization, token does not exist " });
  } else if (authorization) {
    const token = authorization.split(" ")[1];

    await jwt.verify(token, process.env.ACCESS_SECRET, async (err, encoded) => {
      if (err) {
        res.status(400).send({ message: `${err.message}` });
      } else {
        const userInfo = await User.findOne({
          where: { email: encoded.email },
        });

        if (!userInfo) {
          res.status(401).send({ message: "Invalid token" });
        } else {
          next();
        }
      }
    });
  }
};
