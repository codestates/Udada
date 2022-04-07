'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking_petusers', {
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
      date: {
        type: Sequelize.DATE
      },
      petuser_id: {
        type: Sequelize.INTEGER,
        reference : {model : 'petusers', key:'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('booking_petusers');
  }
};