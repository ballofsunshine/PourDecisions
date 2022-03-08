const express = require('express');
const { getAllUsers, createUser, createAdmin, deleteAll, getUserByUsername, updatePassword } = require('../controllers/users');
const { login } = require('../controllers/login');
const { logout } = require('../controllers/logout');

const { ensureAuth, forwardAuth } = require('../controllers/auth');

const router = express.Router();

// TODO ensureAuth is here for test, remove later
router.get('/', (req,res) => {
    getAllUsers(req,res);
})

router.post('/register', (req,res) => {
    createUser(req, res);
});

// router.post('/registerAdmin', (req,res) => {
//     createAdmin(req, res);
// });

// add forwardAuth 
router.post('/login', (req, res, next) => {
    login(req,res,next);
})

router.post('/login', (req, res, next) => {
 login (req, res, next)
})

// add ensureAuth
router.get('/logout', (req, res) => {
    logout(req, res)
})

// for testing
router.get('/profile', (req, res, next) => {
    if (req.user) {
        return res.json({ user: req.user})
    } else { 
        return res.json({ user: null })
    }
})

router.get('/:username', (req, res) => {
    getUserByUsername(req,res)
    
}) 

// router.put('/:username/update', (req, res) => {
router.put('/update', (req, res) => {
    updatePassword(req, res)
})

router.delete('/', (req, res) => {
    deleteAll(req,res)
});

module.exports = router;
