// Importing libraries
const fs = require('fs');
const path = require('path');

// Importing Image Model
const Image = require('../models/imgModel');

exports.uploadImage = (req, res) => {
  var obj = {
    user: req.user.email,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + '../uploads/' + req.file.filename)
      ),
      contentType: 'image/png',
    },
  };
  imgModel.create(obj, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: true });
    }
  });
};

exports.getImage = (req, res) => {
  const user = req.params.user;

  Image.findOne({ user }, (err, image) => {
    if (err) {
      res.setHeader('content-type', 'application/json');
      res.send(JSON.stringify(err, undefined, 2));
      console.log(error);
    } else {
      res.json({
        img: `data:image/${
          image.img.contentType
        };base64,${image.img.data.toString('base64')}`,
      });
    }
  });
};
