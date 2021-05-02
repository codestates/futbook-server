const { User } = require("../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const userInfo = await User.findOne({ where: { email, password } });
  if (userInfo) {
    const userData = { ...userInfo.dataValues };
    delete userData.password;
    console.log(process.env.ACCESS_SECRET);

    const accessToken = jwt.sign(
      { email },
      process.env.ACCESS_SECRET,
      {
        expiresIn: 60 * 60,
      },
      (err, coded) => {
        if (err) {
          res.status(500).send({ message: "fail to generate token" });
        }
        User.update({ token: coded }, { where: { email } });
        res
          .status(200)
          .send({ data: { accessToken }, message: "Login successful" });
      }
    );
  } else {
    res.status(401).send({ message: "Login failed" });
  }
};
