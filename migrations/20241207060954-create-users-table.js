'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Email should be valid"
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phoneNo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      otp: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      expiryTime: {
        type: Sequelize.BIGINT,
        defaultValue: null
      },
      userRoleId: {
        type: Sequelize.UUID,
        references: { model: 'userRoles', key: 'id' },
        onDelete: 'SET NULL',
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: null

      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: null
      }

    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};