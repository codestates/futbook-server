const { User } = require("../../models");

module.exports = async (req, res) => {
  try {
    const userInfo = await User.findOne({ where: { id: res.userId } });
    const { id, email, nickname } = userInfo;

    res.status(200).send({
      data: { userInfo: { id, email, nickname } },
      message: "succeeded in getting userInfo",
    });
  } catch (err) {
    res.status(500).send({ message: `${err.message}` });
  }
};
