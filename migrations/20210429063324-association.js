"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint("Bookings", {
      fields: ["user_Id"],
      type: "foreign key",
      name: "fk_Bookings_Users",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("Bookings", {
      fields: ["futsal_Id"],
      type: "foreign key",
      name: "fk_Bookings_Futsals",
      references: {
        table: "Futsals",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("Futsals", {
      fields: ["user_Id"],
      type: "foreign key",
      name: "fk_Futsals_Users",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint("Bookings", "fk_Bookings_Users", {});
    await queryInterface.removeConstraint(
      "Bookings",
      "fk_Bookings_Futsals",
      {}
    );
    await queryInterface.removeConstraint("Futsals", "fk_Futsals_Users", {});
  },
};
