const Question = require('../models/questionModel');

exports.addQuestion = (req, res) => {
  const title = req.body.title;
  const cat = req.body.cat;
  const author = req.user.email;

  const question = new Question({
    title,
    cat,
    author,
  });

  question
    .save()
    .then((ques) => {
      res.status(201).json({ ques, success: true });
    })
    .catch((err) => {
      res.setHeaders('content-type', 'application/json');
      res.send(JSON.stringify(err, undefined, 2));
    });
};

exports.getQuestion = (req, res) => {
  const _id = req.params.id;
  Question.findById(_id, (err, ques) => {
    if (err) {
      res.setHeaders('content-type', 'application/json');
      res.send(JSON.stringify(err, undefined, 2));
    } else {
      res.json({ ques, success: true });
    }
  });
};

exports.getAllQuestions = (req, res) => {
  const perPage = 10;
  const page = Math.max(0, (req.query.page || 1) - 1);

  const finder = req.body.cat ? { cat: req.query.cat } : {};

  Question.find(finder)
    .limit(perPage)
    .skip(perPage * page)
    .sort('-createdAt')
    .exec(function (err, ques) {
      if (err) {
        res.setHeaders('content-type', 'application/json');
        res.send(JSON.stringify(err, undefined, 2));
      } else {
        Question.countDocuments().exec(function (err, count) {
          if (err) {
            res.setHeaders('content-type', 'application/json');
            res.send(JSON.stringify(err, undefined, 2));
          } else {
            res.json({
              ques,
              page: page + 1,
              pages: Math.floor(count / perPage) + 1,
            });
          }
        });
      }
    });
};
