const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
  user: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

const Image = model('images', imageSchema);

module.exports = Image;
