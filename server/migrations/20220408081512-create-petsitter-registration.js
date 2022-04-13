'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('petsitter_registrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      startdate: {
        type: Sequelize.STRING
      },
      enddate: {
        type: Sequelize.STRING
      },
      days: {
        type: Sequelize.STRING
      },
      payment: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('petsitter_registrations');
  }
};