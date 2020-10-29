// Importing express
const express = require('express');

// Importing authMW
const { auth, moderator } = require('../middleware/authMiddleware');

// Importing User controller
const user = require('../controllers/user');

// Initializing userRouter
const userRouter = express.Router();

// Handling get user details GET request
userRouter.get('/getDetails/:email', headerMW, user.getUserDetails);

// Handling register POST request
userRouter.post('/register', headerMW, user.registerUser);

// Handling login POST request
userRouter.post('/login', headerMW, user.loginUser);

// Handling moderator POST request for creating moderator
userRouter.post('/moderator', headerMW, auth, moderator, user.loginUser);

module.exports = userRouter;
