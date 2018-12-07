const Users = require('../models').UsersBest;
const validator = require('validator');

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, users;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }

    [err, users] = await to(Users.findAll({where: whereStatement}));
   
    return res.json(users);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
    let err, user;
    let userId = parseInt(req.params.userId)
    res.setHeader('Content-Type', 'application/json');
    
    [err, user] = await to(Users.findOne({where: userId}))
    if (!user) {
        res.statusCode = 404;
        return res.json({success:false, error: err});
    }
    return res.json(user);
}
module.exports.get = get;

const update = async function (req, res) {
    let err, user, data;
    data = req.body;  
  
    [err, user] = await to(Users.update(data, {
      where: {
        id: data.id
      }
    }));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
    }
  
    return res.json(user);
}
module.exports.update = update;
  
const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, user, userInfo;
    userInfo = req.body;

    if (!userInfo.email) {
      return ReE(res, 'Please enter an email to register.', 422); // 422 unprocessable entity
    } else if(!userInfo.password) {
      return ReE(res, 'Please enter a password to register.', 422);
    } else {
      [err, user] = await to(createUser(userInfo));
      if(err) return ReE(res, err, 422);

      return ReS(res, user, 201);
    }
}
module.exports.create = create;

const createUser = async function(userInfo) {
  let err;
  if (validator.isEmail(userInfo.email)) {
    [err, user] = await to(Users.create(userInfo));
    // Because we handled constraints on the usersbest.js for everything but the unique of email, that is the only expected err return
    if (err) TE('Another user already has this email.');
    return user;
  } else {
    TE('Email is invalid.');
  }
}
module.exports.createUser = createUser;