'use strict';

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const users = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      otp: {
        type: DataTypes.STRING,
      },
      expiryTime: {
        type: DataTypes.BIGINT
      }
    },
    {
      tableName: 'users',
      timestamps: true,
    }
  );

  users.associate = function (models) {
    if (models.userRoles) {
      users.belongsTo(models.userRoles, {
        foreignKey: 'userRoleId',
      });
    } else {
      console.error('userRoles model is not properly loaded');
    }
  };
  return users;
};
