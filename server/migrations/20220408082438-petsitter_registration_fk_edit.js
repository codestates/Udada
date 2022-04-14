"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("petsitter_registrations", "petsitter_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("petsitter_registrations", {
      fields: ["petsitter_id"],
      type: "foreign key",
      name: "petsitters_id_fk",
      references: {
        table: "petsitters",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("petsitter_registrations", "petsitter_id");
  },
};