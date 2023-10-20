const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path_to_your_sequelize_initialization');

class Task extends Model {}

Task.init({
  name: DataTypes.STRING,
  status: DataTypes.STRING,
  priority: DataTypes.STRING,
  // ... other fields
}, { sequelize, modelName: 'task' });

module.exports = Task;
