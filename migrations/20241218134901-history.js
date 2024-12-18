'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('history', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      patientId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      doctorId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      histor: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: []
      },
      createdAt: {
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        type: Sequelize.DATEONLY
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('history')
  }
};
