"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Futsal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Futsal.belongsTo(models.User, {
        foreignKey: "user_Id",
      });
      models.Futsal.hasMany(models.Booking, {
        foreignKey: "futsal_Id",
      });
    }
  }
  Futsal.init(
    {
      stageType: DataTypes.STRING,
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      description: DataTypes.STRING,
      fee: DataTypes.INTEGER,
      thumnail: DataTypes.STRING,
      user_Id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Futsal",
    }
  );
  return Futsal;
};
