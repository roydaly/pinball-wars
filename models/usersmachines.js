'use strict';
module.exports = (sequelize, DataTypes) => {
  const usersMachines = sequelize.define('usersMachines', {
    cloudinaryUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    machineId: DataTypes.INTEGER
  }, {});
  usersMachines.associate = function(models) {
    // associations can be defined here
  };
  return usersMachines;
};