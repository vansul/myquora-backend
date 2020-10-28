const mongoose = require('mongoose');
require('dotenv').config();

// The mongodb atlas URI
const uri = process.env.MONGO_URI;

// Binding global Promise with mongoose Promise
mongoose.Promise = global.Promise;

// Establishing connection if error comes throw it.
const connectDB = () =>
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('MongoDB connection established successfully...'.yellow.bold);
    })
    .catch((err) => {
      console.log(
        `Error in DB connection : ${JSON.stringify(err, undefined, 2)}`.red.bold
      );
      process.exit(1);
    });

// Export connected mongoose
module.exports = connectDB;
