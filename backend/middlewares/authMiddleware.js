const bcrypt = require('bcrypt');

const { config } = require('../config/Config');

async function verifyUserToken (req, res, next) {
    console.log('JWT Verify user token Middleware');
    next();

}