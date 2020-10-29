// Importing express
const express = require('express');

// Importing Question controller
const question = require('../controllers/question');

// Importing authMW
const { auth, modOrOwner } = require('../middleware/authMiddleware');

// Initializing questionRouter
const questionRouter = express.Router();

// Handling add POST request
questionRouter.post('/add', auth, question.addQuestion);

// Handling GET request
questionRouter.get('/get/:id', question.getQuestion);

// Handling GET request
questionRouter.get('/getAll/', question.getAllQuestions);

// Handling edit request
questionRouter.put(
  '/edit/:id',
  auth,
  modOrOwner,
  question.editQuestion
);

module.exports = questionRouter;
