const generateToken = require('../utils/generateToken');

const User = require('../models/userModel');

exports.registerUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const dob = req.body.dob;
  const pwd = req.body.pwd;
  const gender = req.body.gender;
  const country = req.body.country;

  const user = new User({
    name,
    email,
    mobile,
    dob,
    pwd,
    gender,
    country,
  });

  user
    .save()
    .then(() => {
      res.status(201).json({ success: true });

      console.log('User Created'.trap);
    })
    .catch((err) => {
      const message = err.message || 'Error while creating User.';

      res.status(500).json({ message: message });

      console.log(message.red.bold);
    });
};

exports.loginUser = async (req, res) => {
  const { email, pwd } = req.body;

  const user = await User.findOne({ email });

  if (user && user.matchPassword(pwd)) {
    const { pwd, ...response } = {
      ...user._doc,
      token: await generateToken(user._id),
      success: true,
    };

    res.json(response);
  } else {
    res.status(401).json({ error: 'Invalid Email or Password.' });
  }
};

exports.registerModerator = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const dob = req.body.dob;
  const pwd = req.body.pwd;
  const gender = req.body.gender;
  const country = req.body.country;

  const user = new User({
    name,
    email,
    mobile,
    dob,
    pwd,
    gender,
    country,
    isModerator: true,
  });

  user
    .save()
    .then(() => {
      res.status(201).json({ success: true });

      console.log('Moderator Created'.trap);
    })
    .catch((err) => {
      const message = err.message || 'Error while creating Admin.';

      res.status(500).json({ message: message });

      console.log(message.red.bold);
    });
};

exports.getUserDetails = (req, res) => {
  const email = req.params.email;
  User.findOne({ email }).exec((err, usr) => {
    if (err) {
      res.setHeader('content-type', 'application/json');
      res.send(JSON.stringify(err, undefined, 2));
    } else {
      res.json({ user: usr });
    }
  });
};
