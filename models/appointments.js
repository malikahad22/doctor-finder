'use strict';
const { DataTypes } = require('sequelize');

module.exports = (Sequelize) => {

   const appointments = Sequelize.define('appointments', {
      id: {
         type: DataTypes.UUID,
         allowNull: false,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true
      },
      description: {
         type: DataTypes.TEXT,
         allowNull: false
      },
      date: {
         type: DataTypes.DATEONLY,
         allowNull: false
      }
   }, {
      tableName: 'appointments',
      timestamps: true,
   });

   appointments.associate = function (models) {
      if (models.patients) {
         appointments.belongsTo(models.patients, {
            foreignKey: 'patientId',
            as: 'patient'
         });
      }

      appointments.belongsTo(models.doctors, {
         foreignKey: 'doctorId',
         as: 'doctor'
      })
   }

   return appointments;
}