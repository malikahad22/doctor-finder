'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctor_specialities', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,

      },

      doctorId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'doctors',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },

      specialityId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'specialities',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },

      createdAt: {
        type: Sequelize.DATE
      },

      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('doctor_specialities');

  }
};
