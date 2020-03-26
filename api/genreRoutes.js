const express = require('express');

function genreRoutes(Movie) {
  const genreRoutes = express.Router();

  genreRoutes.route('/:genre').get((req, res) => {
    Movie.find({
      genre: req.params.genre
    }, (err, movies) => {
      if (err) {
        return res.send(err);
      }
      const retrunMovies = movies.map(movie => {
        let newMovie = movie.toJSON();
        newMovie.links = {};
        const title = movie.title.split(' ').join('%20');
        newMovie.links.self = `http://${req.headers.host}/api/movie/${title}`;
        return newMovie;
      });
      return res.json(retrunMovies);
    });
  });

  return genreRoutes;
}
module.exports = genreRoutes;
