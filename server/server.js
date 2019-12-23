const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');

const userRouter = express.Router();
const movieRouter = express.Router();
const app = express();
const port = process.env.PORT || 3500;

userRouter.route('users')
  .get((req, res) => {

  });
movieRouter.toute('/movies')
  .get((req, res) => {
    const response = {
      hello: 'This is my API'
    };
    res.json{response};
  });
app.use('/api', movieRouter);
app.use(morgan('tiny'));

app.get('/', function (req, res) {
  res.send('Welcome to my API');
});

app.listen(port, function () {
  debug(`Listening on port ${chalk.green(port)}`);
});
