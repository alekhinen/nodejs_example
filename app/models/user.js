var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// The User model

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

// TODO: get this to work
// userSchema.virtual( 'full_name' ).get( function() {
//   return this.name.first + ' ' + this.name.last;
// });
// userSchema.set( 'toJSON', { virtuals: true });
// userSchema.set( 'toObject', { virtuals: true });

module.exports = mongoose.model( 'User', userSchema );
