"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Booking.belongsTo(models.User, {
        foreignKey: "user_Id",
      });
      models.Booking.belongsTo(models.Futsal, {
        foreignKey: "futsal_Id",
      });
    }
  }
  Booking.init(
    {
      user_Id: DataTypes.INTEGER,
      futsal_Id: DataTypes.INTEGER,
      bookingDate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
