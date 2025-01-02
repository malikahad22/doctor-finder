'use strict';

const { DataTypes } = require('sequelize');

module.exports = function (Sequelize) {
   const doctor_specialities = Sequelize.define('doctor_specialities', {
      id: {
         type: DataTypes.UUID,
         allowNull: false,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true,

      }
   });


   return doctor_specialities;
}