'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require("../helper/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order, { foreignKey: 'userId' });
      User.belongsTo(models.Cart, { foreignKey: 'userId' });
    }
  }

  User.init({
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    refresh_token: DataTypes.TEXT,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName: true,
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password);
        user.role = 'customer';
      }
    }
  });

  return User;
};
