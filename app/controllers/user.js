var User = require('../models/user.js');

// API for User

module.exports = {

  // post ---------------------------------------------------------------------
  // creates a new user and saves it to db
  post: function( req, res ) {
    var x = new User({
      name: {
        first: req.body.first_name,
        last: req.body.last_name
      },
      email: req.body.email,
      phone: req.body.phone
    }).save();

    console.log( x );

    res.redirect( '/users/' );
    // res.render( 'users/list', {
    //   title: 'Successfully saved.',
    //   message: 'successfully saved user!'
    // });
  },

  // list ---------------------------------------------------------------------
  // get a list of users from the db
  list: function( req, res ) {
    User.find( function( err, users ) {
      res.render( 'users/list', {
        title: 'users',
        users: users
      });
    });
  },

  // show ---------------------------------------------------------------------
  // get a single user from the db
  show: function( req, res ) {
    User.findOne({
      email: req.params.email
    }, function( err, user ) {
      res.render( 'users/show', { user: user });
    });
  }

}
