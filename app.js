const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Hello World!!!');
});

app.listen(port);
