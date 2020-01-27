const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const movieModel = new Schema({
  title: {
    type: String
  },
  releaseYear: {
    type: String
  },
  duration: {
    type: String
  },
  rating: {
    type: String
  },
  genre: {
    type: String
  },
  director: {
    type: String
  },
  writer: {
    type: String
  },
  Actors: {
    type: Array
  },
  plot: {
    type: String
  },
  awards: {
    type: String
  },
  imageUrl: {
    type: String
  },
  cover: {
    type: String
  }
});

module.exports = mongoose.model('Movie', movieModel);
