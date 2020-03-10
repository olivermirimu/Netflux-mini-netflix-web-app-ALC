const express = require('express');

function routes(Movie, User) {
  const apiRouter = express.Router();

  /***User Routes***/
  apiRouter.route('/users')
    .post((req, res) => {
      const user = new User(req.body);

      user.save().catch(err => {
        console.log(err);
      });
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

  apiRouter.use('/user/:firstName', (req, res, next) => {
    User.find({
      firstName: req.params.firstName
    }, (err, user) => {
      if (err) {
        return res.send(err);
      }
      if (user) {
        req.user = user;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  //TODO: to be changed to username
  //TODO: put and patch methods failing at save

  apiRouter.route('/user/:firstName')
    .get((req, res) => res.json(req.user))
    .put((req, res) => {
      User.findOneAndReplace({
        firstName: req.params.firstName
      }, req.user, (err, user) => {
        if (err) {
          return res.send(err);
        }
        return res.json(user);
      });
    })
    .patch((req, res) => {
      User.findOneAndUpdate({
        firstName: req.params.firstName
      }, req.body, (err, user) => {
        if (err) {
          return res.send(err);
        }
        console.log(user);
        return res.json(user);
      });
      // const {
      //   user
      // } = req;
      // if (req.body._id) {
      //   delete req.body._id;
      // }
      // Object.entries(req.body).forEach(item => {
      //   const key = item[0];
      //   const value = item[1];
      //   user[key] = value;
      // });
      // console.log(req.user);
      // try {
      //   req.user.save();
      //   return res.json(user);
      // } catch (err) {
      //   res.send(err);
      // }
    })
    .delete((req, res) => {
      User.findOneAndDelete({
        firstName: req.params.firstName
      }, err => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });

  /***Movie Routes***/
  apiRouter.route('/movies')
    .get((req, res) => {

      Movie.find((err, movies) => {
        if (err) {
          return res.send(err);
        }
        const returnMovies = movies.map((movie) => {
          let newMovie = movie.toJSON();
          newMovie.links = {};
          const title = movie.title.split(' ').join('%20');
          newMovie.links.self = `http://${req.headers.host}/movie/${title}`;
          return newMovie;
        });
        return res.json(returnMovies);
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
