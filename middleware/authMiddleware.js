const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config();

const auth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ error: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ error: 'Not authorized, token failed' });
  }
};

const moderator = (req, res, next) => {
  if (req.user && req.user.isModerator) {
    next();
  } else {
    res.status(401).json({ error: 'Not authorized, token failed' });
  }
};

module.exports = { auth, moderator };
