// import express from 'express';
// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// var SALT_WORK_FACTOR = 10;
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

// import User from '../models/user.model.js';
const User = require('../models/user.model');

const router = express.Router();

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.createUser = async (req, res) => {
    
    const { username, password } = req.body;  
    const newUser = new User({username, password});
    
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            // save them to database
            newUser.save()
            .then(() => res.json(newUser))
            .catch(err => res.status(409).json({ message: err.message }));
        });
    });
}

module.exports.updateUser = async (req, res) => {
    
    const { username, password, newPassword } = req.body;
    const updatedUser = User({username, password});

    // Not exactly how the hashing works here so leaving blank
}

module.exports.logIn = async (req, res) => {}

module.exports.logOut = async (req, res) => {}


// export default router;
module.exports = router;
