'use strict'

const { DataTypes } = require("sequelize")

module.exports = (Sequelize) => {
   const doctors = Sequelize.define('doctors', {
      id: {
         type: DataTypes.UUID,
         allowNull: false,
         primaryKey: true,
         defaultValue: DataTypes.UUIDV4,
      },
      experience: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      location: {
         type: DataTypes.JSON,
         allowNull: false
      },
      bio: {
         type: DataTypes.STRING,
         allowNull: false
      },

   },
      {
         tableName: 'doctors',
         timestamps: true,
      });

   doctors.associate = function (models) {
      doctors.hasOne(models.users, {
         foriegnKey: 'doctorId',
         as: 'doctor'
      });

      doctors.hasMany(models.appointments, {
         foriegnKey: 'doctorId',
         as: 'doctor'
      });
   }

   return doctors;
}