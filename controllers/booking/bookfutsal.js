const { Booking } = require("../../models");

module.exports = async (req, res) => {
  const user_Id = res.userId;
  const { futsal_Id, bookingDate } = req.body;
  const result = await Booking.findOne({ where: { futsal_Id, bookingDate } });
  if (!result) {
    try {
      await Booking.create({ user_Id, futsal_Id, bookingDate });
      res.status(200).send({ message: "booking successful" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  } else {
    res.status(409).send({ message: "already booked" });
  }
};
