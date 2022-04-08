"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("petsitter_petusers", "petsitter_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("petsitter_petusers", {
      fields: ["petsitter_id"],
      type: "foreign key",
      name: "petsitter_petusers_id_fk2",
      references: {
        table: "petsitters",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("petsitter_petusers", "petuser_id");
  },
};