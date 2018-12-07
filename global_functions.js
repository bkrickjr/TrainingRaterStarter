pe = require('parse-error');//parses error so you can read error message and handle them accordingly

to = function (promise) {
  return promise
    .then(data => {
      return [null, data];
    }).catch(err => [pe(err)])
};

// Throw Error
TE = function(errMessage, log) {
  if (log === true) {
    console.error(errMessage);
  }
  throw new Error(errMessage);  
}

// Return Error
ReE = function(res, err, code) {
  // is there an error object AND does it have a message?
  if (typeof err == 'object' && typeof err.message != 'undefined') {
    err = err.message;
  }
  if (typeof code != 'undefined') res.statusCode = code;
  return res.json({success: false, error: err});
}

// Return Success
ReS = function(res, data, code) {
  let sendData = {success: true};

  if (typeof data == 'object') {
    // Object.assign will take a set of object and mash them into a single object from left to right
    // The following line compounds the data and sendData object
    sendData = Object.assign(data, sendData);
  }

  if (typeof code !== 'undefined') res.statusCode = code;

  return res.json(sendData)
}