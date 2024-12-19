'use strict';

const { DataTypes } = require('sequelize');

module.exports = (Sequelize) => {
   const history = Sequelize.define('history', {
      id: {
         type: DataTypes.UUID,
         allowNull: false,
         defaultValue: DataTypes.UUIDV4,
        primaryKey: true,

      },
      history: {
         type: DataTypes.TEXT,
         allowNull: false
      }
   }, {
      tableName: 'history',
      timeStamps: true
   });

   history.associate = function (models) {

      history.belongsTo(models.patients, {
         foreignKey: 'patientId',
         as: 'patientHistory'
      });
      history.belongsTo(models.doctors, {
         foreignKey: 'doctorId',
         as: 'doctorHistory'
      })
   };

   return history;
}