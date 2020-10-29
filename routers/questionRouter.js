// Importing express
const express = require('express');

// Importing Question controller
const question = require('../controllers/question');

// Importing authMW
const { auth } = require('../middleware/authMiddleware');

// Initializing questionRouter
const questionRouter = express.Router();

// Handling add POST request
questionRouter.post('/add', headerMW, auth, question.addQuestion);

// Handling GET request
questionRouter.get('/get/:id', headerMW, question.getQuestion);

// Handling GET request
questionRouter.get('/getAll/', headerMW, question.getAllQuestions);

module.exports = questionRouter;
