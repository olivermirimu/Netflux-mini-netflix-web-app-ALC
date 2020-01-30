const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Movie = require('./models/movieModel');
const User = require('./models/userModel');
const db = mongoose.connect('mongodb://localhost/movieApi', {
  useNewUrlParser: true
});
mongoose.connection;

const app = express();
const port = process.env.PORT || 3500;
const apiRouter = require('./routes')(Movie, User);

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//routing ->routes.js
app.use('/', apiRouter);

app.get('/', function (req, res) {
  res.send('Welcome to my API');
});

app.listen(port, function () {
  debug(`Listening on port ${chalk.green(port)}`);
});
