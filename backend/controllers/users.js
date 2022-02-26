// import express from 'express';
// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// var SALT_WORK_FACTOR = 10;
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;

// import User from '../models/user.model.js';
const User = require('../models/user.model');

const router = express.Router();
// export default router;
module.exports = router;

module.exports = router;

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.createUser = async (req, res) => {
    
    console.log(req.body) 
    const { username, password, email } = req.body;  

    let newUser = await User.findOne({username});

    if (newUser) {
        // add more stuff if this works
        console.log("User already exists");
        return res.redirect('/register'); // for now
    }

    newUser = new User({username, password, email});
    
    newUser.save()
    .then(() => res.status(200).json(newUser))
    .catch( err => res.status(400).json(err));
}

module.exports.updateUser = async (req, res) => {
    
    const { username, password, newPassword } = req.body;
    const updatedUser = User({username, password});

    // Not exactly how the hashing works here so leaving blank
}

module.exports.deleteAll = async (req, res) => {
    try {
        const del = await User.deleteMany({});
        res.status(200).json({del});
    } catch (error) {
        res.status(400).json({ message: error.message });
    } 
    
}

// module.exports.logIn = async (req, res) => {}

// module.exports.logOut = async (req, res) => {}


