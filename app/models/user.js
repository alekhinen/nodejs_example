var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// The User model

var userSchema = new Schema({
  name: {
    first: String,
    last: String
  },
  email: String,
  phone: String,
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model( 'User', userSchema );
