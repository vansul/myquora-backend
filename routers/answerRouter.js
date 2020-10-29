// Importing express
const express = require('express');

// Importing User controller
const answer = require('../controllers/answer');

// Importing every Middleware
const { auth } = require('../middleware/authMiddleware');

// Initializing answerRouter
const answerRouter = express.Router();

// Handling add POST request
answerRouter.post('/add', auth, answer.addAnswer);

// Handling GET request
answerRouter.get('/getAll/:ques', answer.getAllAnswers);

module.exports = answerRouter;
