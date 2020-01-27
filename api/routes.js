const express = require('express');

function routes(Movie, User) {
  const apiRouter = express.Router();

  /***User Routes***/
  apiRouter.route('/users')
    .post((req, res) => {
      const user = new User(req.body);

      user.save();
      return res.status(201).json(user);
    })
    .get((req, res) => {
      User.find((err, users) => {
        if (err) {
          return res.send(err);
        }
        return res.json(users);
      });
    });

  apiRouter.route('/user/:firstName') //to be changed to username
    .get((req, res) => {
      User.find({
        firstName: req.params.firstName
      }, (err, user) => {
        if (err) {
          return res.send(err);
        }
        console.log(user);
        return res.json(user);
      });
    })
    .put((req, res) => {
      User.find({
        firstName: req.params.firstName
      }, (err, user) => {
        if (err) {
          return res.send(err);
        }
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.favourites = req.body.favourites;
        user.password = req.body.password;
        req.user.save();

        return res.json(user);
      });
    })
    .patch( (req,res) => {
      
    });

  /***Movie Routes***/
  apiRouter.route('/movies')
    .get((req, res) => {

      Movie.find((err, movies) => {
        if (err) {
          return res.send(err);
        }
        return res.json(movies);
      });
    });

  apiRouter.route('/movie/:title')
    .get((req, res) => {
      Movie.find({
        title: req.params.title
      }, (err, movies) => {
        if (err) {
          return res.send(err);
        }
        return res.json(movies);
      });
    });
  return apiRouter;
}

module.exports = routes;
