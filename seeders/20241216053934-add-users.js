'use strict';
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const userRoles = await queryInterface.sequelize.query('SELECT * FROM "userRoles"', {});
    await queryInterface.bulkInsert('users', [{
      id: uuidv4(),
      firstName: 'Malik',
      lastName: 'Ahad',
      phoneNo: '+923214350226',
      email: 'ahad.ali@focusteck.com',
      password: "Abcdef@123",
      date_of_birth: new Date('1999-05-29'),
      address: "house E#88 st#1",
      userRoleId: userRoles.flat().find((user) => {
        if (user.role === 'admin') return user
      }).id,
    }, {
      id: uuidv4(),
      firstName: 'Malik',
      lastName: 'Ahad',
      phoneNo: '+923214350222',
      email: 'malikahadofficial226@gmail.com',
      password: "Abcdef@123",
      date_of_birth: new Date('1999-05-29'),
      address: "house E#88 st#1",
      userRoleId: userRoles.flat().find((user) => {
        if (user.role === 'doctor') return user
      }).id,
    },
    {
      id: uuidv4(),
      firstName: 'Malik',
      lastName: 'Ahad',
      phoneNo: '+923214350225',
      email: 'ahad@gmail.com',
      password: "Abcdef@123",
      date_of_birth: new Date('1999-05-29'),
      address: "house E#88 st#1",
      userRoleId: userRoles.flat().find((user) => {
        if (user.role === 'patient') return user
      }).id,
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
