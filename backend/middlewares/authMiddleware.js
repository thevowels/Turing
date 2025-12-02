const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { config } = require('../config/Config');

async function verifyUserToken (req, res, next) {
    console.log('JWT Verify user token Middleware');
    let authToken = req.headers.authorization;
    if(authToken){
        let jwtToken = authToken.substring("Bearer ".length);
        if(jwtToken){
            console.log('JWT verify token : ', jwtToken);
            let verifiedUser = jwt.verify(jwtToken, config.TOKEN_SECRET);
            console.log(verifiedUser);
            if(!verifiedUser)
                return res.status(401).send({message: 'Unauthorized Request'});
            req.user = verifiedUser;
            next();
        }
        else
        {
            res.status(401).json({
                message: 'Unauthorized Request'
            }).end();
        }
    }

    next();
}

module.exports ={
    verifyUserToken,
};