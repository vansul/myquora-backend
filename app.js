// Importing libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('colors');

// Importing DB connector
const connectDB = require('./dbconnector');

const router = require('./routers/router');

// Connecting with the MongoDB
connectDB();

// Initializing express app and PORT
const app = express();
const PORT = process.env.PORT || 5000;

// Using bodyParser.json middleware
app.use(bodyParser.json());

// Using cors middleware
app.use(cors());

// Using router for every routes
app.use('/', router);

app.listen(PORT);
