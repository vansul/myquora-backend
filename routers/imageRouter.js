// Importing libraries
const express = require('express');
const multer = require('multer');

// Importing Image model
const image = require('../controllers/image');

// Importing authMW
const { auth } = require('../middleware/authMiddleware');

// Initializing imageRouter
const imageRouter = express.Router();

// Initializing storage
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, '../uploads');
  },
  filename: (_req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

// Initializing upload
const upload = multer({ storage });

// Handling create POST request
imageRouter.post('/upload', auth, upload.single('image'), image.uploadImage);

// Handling login POST request
imageRouter.post('/get', image.getImage);

module.exports = imageRouter;
