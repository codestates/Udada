"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("booking_petusers", "petuser_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("booking_petusers", {
      fields: ["petuser_id"],
      type: "foreign key",
      name: "booking_petusers_id_fk",
      references: {
        table: "petusers",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("booking_petusers", "petuser_id");
  },
};