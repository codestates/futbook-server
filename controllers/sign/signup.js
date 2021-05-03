const { User } = require("../../models");

module.exports = async (req, res) => {
  const { email, nickname, password } = req.body;

  const isSameNickname = await User.findOne({ where: { nickname } });
  const isSameEmail = await User.findOne({ where: { email } });

  if (isSameEmail) {
    res.status(409).send({ message: "Email already exists" });
  } else if (isSameNickname) {
    res.status(409).send({ message: "NickName already exists" });
  } else {
    try {
      await User.create({ email, nickname, password });
      res.status(200).send({ message: "Signup successful" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  }
};
