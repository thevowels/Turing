let userService = require('../services/UserService');
const { config } = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    let userName = req.body['username'];
    let password = req.body['password'];

    try
    {
        let user = await userService.register(userName, password);
        let payload = {id: user._id};
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res.status(200).send(token);
    }
    catch(err){
        console.log(err);
        res.status(400).send({message: 'User already exists'});

    }
}

const login = async (req, res) => {
    console.log('login body', req.body);
    let userName = req.body('username');
    let password = req.body('password');

    try
    {
        let user = await userService.login(userName, password);
        let payload = {id: user._id};
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res.status(200).send({token});
    }
    catch(err){
        console.log(err);
        res.status(400).send({message: 'Invalid Username or password'});
    }
}

const getUserById = async (req, res, next) => {
    console.log('Req ', req.params);
    let userId = req.params.userId;
    let user = userService.getUserById(userId);
    return res.status(200).json({user});
}

module.exports = {
    getUserById,
    register: registerUser,
    login,
}