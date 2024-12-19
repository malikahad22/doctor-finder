'use strict';

const { DataTypes } = require('sequelize');

module.exports = (Sequelize) => {
   const specialities = Sequelize.define('specialities', {
      id: {
         type: DataTypes.UUID,
         allowNull: false,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true,

      },
      name: {
         type: DataTypes.TEXT,
         allowNull: false
      },
      description: {
         type: DataTypes.TEXT,
         allowNull: false
      }
   }, {
      tableName: 'specialities',
      timestamps: true
   });

   specialities.associate = (models) => {
      specialities.belongsToMany(models.doctors, {
         through: 'doctor-specialities',
         foriegnKey: 'specialityId',
         otherKey: 'doctorId',
         as: 'specialities_doctor'
      })
   }

   return specialities;
}