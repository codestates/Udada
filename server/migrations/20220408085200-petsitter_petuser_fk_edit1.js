"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("petsitter_petusers", "petuser_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("petsitter_petusers", {
      fields: ["petuser_id"],
      type: "foreign key",
      name: "petsitter_petusers_id_fk",
      references: {
        table: "petusers",
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