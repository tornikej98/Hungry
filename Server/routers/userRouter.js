const router = require('express').Router();
const { loginUser, registerUser } = require('../controllers/userController');
const { route } = require('./recipeRouter');

router
    .post('/login', loginUser)
    .post('/register', registerUser)


module.exports = router