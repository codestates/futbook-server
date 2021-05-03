const { User } = require("../../models");

module.exports = (req, res) => {
  // const { authorization } = req.headers;
  const { id, bookingDate } = req.body;
  const userSameId = await User.findOne({ where: id });
  const userSameDate = await User.findOne({ where: bookingDate })
};
// res.send("test ahah, checkcheck");
