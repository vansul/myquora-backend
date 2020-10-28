const Answer = require('../models/answerModel');

exports.addAnswer = (req, res) => {
  const body = req.body.body;
  const ques = req.body.ques;
  const author = req.user.email;

  const answer = new Answer({
    body,
    ques,
    author,
  });

  answer
    .save()
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      if (err) {
        res.setHeaders('content-type', 'application/json');
        res.send(JSON.stringify(err, undefined, 2));
      }
    });
};

exports.getAllAnswers = (req, res) => {
  const ques = req.params.ques;

  Answer.find({ ques }).exec((err, answers) => {
    if (err) {
      res.setHeaders('content-type', 'application/json');
      res.send(JSON.stringify(err, undefined, 2));
    } else {
      res.json({ answers, success: true });
    }
  });
};
