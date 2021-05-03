"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Bookings", [
      {
        user_Id: "2",
        futsal_Id: "3",
        bookingDate: "2021/05/13",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: "2",
        futsal_Id: "1",
        bookingDate: "2021/05/22",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: "2",
        futsal_Id: "3",
        bookingDate: "2021/06/03",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: "3",
        futsal_Id: "1",
        bookingDate: "2021/05/13",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: "3",
        futsal_Id: "5",
        bookingDate: "2021/06/01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Bookings", null, {});
  },
};
