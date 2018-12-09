'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bcrypt_p = require('bcrypt-promise');

module.exports = (sequelize, DataTypes) => {
  var UsersBest = sequelize.define('UsersBest', {
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true, validate: { isEmail: {msg: 'Email is invalid.'} } },
    phone: { type: DataTypes.STRING, allowNull: true, validate: { len: {args: [7,20], msg: 'Phone number is invalid.'}, isNumeric: { msg: 'Phone number must be numeric' } } },
    isTrainer: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    aboutMe: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });
  UsersBest.beforeSave(async (user) => {
    let err;
    if ( user.changed('password') ) {
      let salt, hash
      [err, salt] = await to(bcrypt.genSalt(10));
      if (err) TE(err.message, true);   // throw an error if the salt fails

      [err, hash] = await to(bcrypt.hash(user.password, salt));
      if (err) TE(err.message, true);   // throw an error if the hash fails
      console.log(hash)

      user.password = hash;   // give the hashed value to the api instead of the user typed password
    }
  })

  // prototype extends an object 
  UsersBest.prototype.comparePassword = async function (pw) {
    let err, pass
    if (!this.password) TE('password not set');
     [err, pass] = await to(bcrypt_p.compare(pw, this.password));
    if (err) TE(err);
     if (!pass) TE('invalid password');
     return this;
  }
  UsersBest.prototype.getJWT = function () {
    let expiration_time = parseInt(CONFIG.jwt_expiration);
    return "Bearer " + jwt.sign({ user_id: this.id }, CONFIG.jwt_encryption, { expiresIn: expiration_time });
  };

  return UsersBest;
};