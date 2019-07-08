'use strict';
module.exports = (sequelize, DataTypes) => {
  const usersMachines = sequelize.define('usersMachines', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    cloudinaryUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    machineId: DataTypes.INTEGER
  }, {});
  usersMachines.associate = function(models) {
    // associations can be defined here
  };
  return usersMachines;
};