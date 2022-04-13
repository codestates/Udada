'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('petusers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      careType: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      howBig: {
        type: Sequelize.STRING
      },
      petAge: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('petusers');
  }
};