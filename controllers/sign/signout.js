const { User } = require("../../models");

module.exports = async (req, res) => {
  const id = res.userId;

  try {
    await User.update({ token: null }, { where: { id } });
    res.status(200).send({ message: "signed out successful" });
  } catch (err) {
    res.status(500).send({ message: `${err.message}` });
  }
};
