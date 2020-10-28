const { Schema, model } = require('mongoose');

const questionSchema = new Schema(
  {
    title: { type: String, unique: true },
    cat: String,
    author: String,
  },
  {
    timestamps: true,
  }
);

const Question = model('questions', questionSchema);

module.exports = Question;
