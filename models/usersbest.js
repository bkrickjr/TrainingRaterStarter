'use strict';
module.exports = (sequelize, DataTypes) => {
  var UsersBest = sequelize.define('UsersBest', {
    name: DataTypes.STRING,
    signUpDate: DataTypes.DATE,
    sessionsCompleted: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UsersBest;
};