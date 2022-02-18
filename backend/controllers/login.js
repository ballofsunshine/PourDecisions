// import express from 'express';
// import mongoose from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');

// import User from '../models/user.model.js';
const User = require('../models/user.model');

const router = express.Router();

function checkUsername(id) {
    var valid = User.findById(id).exec();
    if (valid != null) {
        return true;
    }
    else return false;
}

function checkPassword(password) {
    var valid = User.findById(id).exec();
    var upassword = valid.password;
    if (password == upassword){
        return true;
    }
    else {
        return false;
    }
}

module.exports.checkLogin = function(username, password) {
    User.findOne({username}, function(err, user) {
        if (err) {
            throw 'LOGIN-INVALID'
        }
        else if (user.password != password) {
            throw 'LOGIN-INVALID';
        }
        else {
            sessionStorage.setItem('status', 'loggedIn');
            return true;
        }
    })
}

module.exports.login = function(username,password) {
    if (password == null){
        throw 'LOGIN-FIELD-EMPTY';
    }
    if (username == null){
        throw 'LOGIN-FIELD-EMPTY';
    }
    var loggedIn = checkLogin(username, password);
    return loggedIn;
};

// export default router;
module.exports = router;
