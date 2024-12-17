'use strict';
const { v4: uuidv4 } = require('uuid')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('userRoles', [
      {
        id: uuidv4(),
        role: 'admin',
      }, {
        id: uuidv4(),
        role: "patient",
      }, {
        id: uuidv4(),
        role: "doctor"
      }
    ], { returning: true });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usreRoles', null, {});
  }
};
