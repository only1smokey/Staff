const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path_to_your_sequelize_initialization');

class User extends Model {}

User.init({
  username: DataTypes.STRING,
  password: DataTypes.STRING,  // You'll store hashed passwords, not plain-text
  role: DataTypes.STRING
  // add other fields if needed
}, { sequelize, modelName: 'user' });

module.exports = User;
