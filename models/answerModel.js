const { Schema, model } = require('mongoose');

const answerSchema = new Schema(
  {
    body: String,
    ques: String,
    author: String,
  },
  {
    timestamps: true,
  }
);

const Answer = model('answers', answerSchema);

module.exports = Answer;
