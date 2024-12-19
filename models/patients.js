'use strict';

const { DataTypes } = require('sequelize');

module.exports = (Sequelize) => {
   const patients = Sequelize.define('patients', {
      id: {
         type: DataTypes.UUID,
         allowNull: false,
         primaryKey: true,
         defaultValue: DataTypes.UUIDV4,
      },
      emergency_phone: {
         type: DataTypes.STRING,
         allowNull: false
      }
   },
      {
         tableName: 'patients',
         timestamps: true,
      });

   patients.associate = function (models) {
      if (models.users) {
         patients.hasOne(models.users, {
            foreignKey: 'patientId',
            as: 'patient'
         });
      } else {
         console.error('users model is not properly loaded');
      }

      patients.hasMany(models.appointments, {
         foreignKey: 'patientId',
         as: 'appointments'
      })
   }

   return patients;
}