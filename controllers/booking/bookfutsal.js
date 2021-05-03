const { User } = require("../../models");

module.exports = (req, res) => {
  // const { authorization } = req.headers;
  const { id, bookingDate } = req.body;
  const userSameId = await User.findOne({ where: id });
  const userSameDate = await User.findOne({ where: bookingDate })

  if (userSameId) {
    res.status(409).json({ message: 'You have already booked' })
  } else if (userSameDate) {
    res.status(409).json({ message: 'Cannot book twice on same day' })
  } else {
    try {
      await User.create({ id, bookingDate });
      res.status(200).send({ message: 'Booking successful' })
    } catch (err) {
      res.status(401).send({ message : 'Invaild token, failed to book' })
    }
  }
};
// res.send("test ahah, checkcheck");
