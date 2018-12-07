'use strict';
module.exports = (sequelize, DataTypes) => {
  var UsersBest = sequelize.define('UsersBest', {
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true, validate: { isEmail: {msg: 'Email is invalid.'} } },
    phone: { type: DataTypes.STRING, allowNull: true, validate: { len: {args: [7,20], msg: 'Phone number is invalid.'}, isNumeric: { msg: 'Phone number must be numeric' } } },
    isTrainer: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    aboutMe: DataTypes.STRING,
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