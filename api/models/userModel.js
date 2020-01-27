const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const userModel = new Schema({
  //id
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  favourites: {
    type: Array
  },
  // subscription: 2,
  // card: string,
  password: {
    type: String
  }
  // tnC?: boolean
});

module.exports = mongoose.model('User', userModel);
