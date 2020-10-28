// Importing express
const express = require('express');

// Importing userRouter
const userRouter = require('./userRouter');

// Importing imageRouter
const imageRouter = require('./imageRouter');

// Importing questionRouter
const questionRouter = require('./questionRouter');

// Importing answerRouter
const answerRouter = require('./answerRouter');

// Initializing router
const router = express.Router();

// Using userRouter for /user
router.use('/user', userRouter);

// Using imageRouter for /image
router.use('/image', imageRouter);

// Using questionRouter for /question
router.use('/question', questionRouter);

// Using answerRouter for /answer
router.use('/answer', answerRouter);

module.exports = router;
