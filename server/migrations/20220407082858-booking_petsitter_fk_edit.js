"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("booking_petsitters", "petsitter_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("booking_petsitters", {
      fields: ["petsitter_id"],
      type: "foreign key",
      name: "posts_comments_id_fk",
      references: {
        table: "petsitters",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("booking_petsitters", "petsitter_id");
  },
};