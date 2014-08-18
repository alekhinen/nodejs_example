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

// TODO: get this to work
// userSchema.virtual( 'full_name' ).get( function() {
//   return this.name.first + ' ' + this.name.last;
// });
// userSchema.set( 'toJSON', { virtuals: true });
// userSchema.set( 'toObject', { virtuals: true });

module.exports = mongoose.model( 'User', userSchema );
