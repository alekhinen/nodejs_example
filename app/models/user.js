var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// user model -----------------------------------------------------------------
// ----------------------------------------------------------------------------

// user schema (persisted to db) ----------------------------------------------
var userSchema = new Schema({
  name: {
    first: { type: String, min: 1, max: 30, required: true },
    last: { type: String, min: 1, max: 30, required: true }
  },
  email: { type: String, match: /\S+@\S+\.\S+/, required: true },
  phone: {
    type: String,
    match: /^((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/,
    required: true
  },
  created: { type: Date, default: Date.now }
});

// virtual schemas ------------------------------------------------------------
userSchema.virtual( 'name.full' ).get( function () {
  return this.name.first + ' ' + this.name.last;
});
userSchema.virtual( 'name.full' ).set( function (name) {
  var split = name.split( ' ' );
  this.name.first = split[ 0 ];
  this.name.last = split[ 1 ];
});

module.exports = mongoose.model( 'User', userSchema );
