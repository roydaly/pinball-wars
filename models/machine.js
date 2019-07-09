'use strict';
module.exports = (sequelize, DataTypes) => {
  const machine = sequelize.define('machine', {
    name: DataTypes.STRING,
    ipdb: DataTypes.INTEGER
    // opdb: DataTypes.INTEGER
  }, {});
  machine.associate = function(models) {
    models.machine.belongsToMany(models.user, {through: "usersMachines"})
  };
  return machine;
};