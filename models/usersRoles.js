'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   const userRoles = sequelize.define(
      'userRoles',
      {
         id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
         },
         role: {
            type: DataTypes.STRING,
            allowNull: false
         }
      },
      {
         tableName: 'userRoles',
         timestamps: true,
      }
   );
   return userRoles;
};
