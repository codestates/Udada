"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("petuser_registrations", "petuser_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("petuser_registrations", {
      fields: ["petuser_id"],
      type: "foreign key",
      name: "petusers_id_fk",
      references: {
        table: "petusers",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("petuser_registrations", "petuser_id");
  },
};