// Importing express
const express = require('express');

// Importing Question controller
const question = require('../controllers/question');

// Importing authMW
const { auth } = require('../middleware/authMiddleware');

// Initializing questionRouter
const questionRouter = express.Router();

// Handling add POST request
questionRouter.post('/add', auth, question.addQuestion);

// Handling GET request
questionRouter.get('/get/:id', question.getQuestion);

// Handling GET request
questionRouter.get('/getAll/', question.getAllQuestions);

module.exports = questionRouter;
