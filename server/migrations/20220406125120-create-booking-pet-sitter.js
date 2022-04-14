'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking_petsitters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      isBooking:{
        type: Sequelize.BOOLEAN
      },
      payment :{
        type: Sequelize.INTEGER
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
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('booking_petsitters');
  }
};