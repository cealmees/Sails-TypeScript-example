var jwt = require('express-jwt');

var authCheck = jwt({
  secret: new Buffer('SECRET', 'base64'),
  audience: 'CLIENT ID'
});

module.exports = authCheck;