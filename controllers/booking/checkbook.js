const { Booking } = require("../../models");

module.exports = async (req, res) => {
  const user_id = req.params.id;

  const result = await Booking.findAll({ where: { user_id } });
  if (result.length === 0) {
    res.status(400).send({ message: "Invalid user_id params" });
  } else {
    const bookingDatas = result.map(data => {
      let { id, user_Id, futsal_Id, bookingDate } = data.dataValues;
      return { id, user_Id, futsal_Id, bookingDate };
    });

    res.status(200).send({
      data: { bookingDatas },
      message: "succeeded in getting bookingDatas",
    });
  }
};
