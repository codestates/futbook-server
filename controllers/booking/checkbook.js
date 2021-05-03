const { Booking } = require("../../models");

module.exports = async (req, res) => {
  const user_id = res.userId;
  try {
    const result = await Booking.findAll({ where: { user_id } });

    const bookingDatas = result.map(data => {
      let { id, user_Id, futsal_Id, bookingDate } = data.dataValues;
      return { id, user_Id, futsal_Id, bookingDate };
    });

    res.status(200).send({
      data: { bookingDatas },
      message: "succeeded in getting bookingDatas",
    });
  } catch (err) {
    res.status(500).send({ message: `${err.message}` });
  }

  // if (result.length === 0) {
  // } else {
  // }
};
