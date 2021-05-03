const { Futsal } = require("../../models");

module.exports = async (req, res) => {
  const result = await Futsal.findAll();

  if (result.length === 0) {
    res.status(400).send({ message: "no futsal data" });
  } else {
    const futsalDatas = result.map(futsal => {
      futsal = futsal.dataValues;
      delete futsal.createdAt;
      delete futsal.user_Id;
      return futsal;
    });

    res.status(200).send({
      data: { futsalDatas },
      message: "succeeded getting in futsalDatas",
    });
  }
};
