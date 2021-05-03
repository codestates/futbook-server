const { Booking } = require("../../models");

module.exports = async (req, res) => {
  const user_Id = res.userId;
  const { futsal_Id, bookingDate } = req.body;
  console.log(user_Id);
  try {
    await Booking.destroy({ where: { user_Id, futsal_Id, bookingDate } });

    res.status(200).send({ message: "canceled booking successful" });
  } catch (err) {
    res.status(500).send({ message: `${err.message}` });
  }
};
