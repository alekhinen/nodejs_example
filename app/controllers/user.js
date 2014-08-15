var User = require('../models/user.js');

// API for User

exports = {

  // post ---------------------------------------------------------------------
  // creates a new user and saves it to db
  post: function( req, res ) {
    new User({
      name: {
        first: req.body.first_name,
        last: req.body.last_name
      },
      email: req.body.email,
      phone: req.body.phone
    }).save();
  },

  // list ---------------------------------------------------------------------
  // get a list of users from the db
  list: function( req, res ) {
    User.find( function( err, users ) {
      res.send( users );
    });
  },

  // show ---------------------------------------------------------------------
  // get a single user from the db
  show: function( req, res ) {
    User.findOne({
      email: req.params.email
    }, function( err, user ) {
      res.send([{user: user}]);
    });
  }

}
