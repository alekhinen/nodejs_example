var User = require('../models/user.js');

// API for User

module.exports = {

  // list ---------------------------------------------------------------------
  // get a list of users from the db
  list: function( req, res ) {
    User.find( function (err, users) {
      res.render( 'users/list', {
        title: 'users',
        users: users
      });
    });
  },

  // show ---------------------------------------------------------------------
  // get a single user from the db
  show: function (req, res) {
    User.findOne({
      _id: req.params.id
    }, function (err, user) {
      res.render( 'users/show', { title: user.name.first, user: user });
    });
  },

  // new ----------------------------------------------------------------------
  new: function (req, res) {
    res.render( 'users/new', { title: 'New User' });
  },

  // post ---------------------------------------------------------------------
  // creates a new user and saves it to db
  post: function (req, res) {
    new User({
      name: {
        first: req.body.first_name,
        last: req.body.last_name
      },
      email: req.body.email,
      phone: req.body.phone
    }).save( function (err, user, numberAffected) {
      if ( err ) {
        res.send( err );
      } else {
        res.redirect( '/users/user/' + user._id );
      }
    });
  },

  // edit ---------------------------------------------------------------------
  // edit a user
  edit: function (req, res) {
    User.findOne({
      _id: req.params.id
    }, function (err, user) {
      if ( err ) {
        res.send( err );
      } else {
        res.render( 'users/edit', { title: 'Edit User', user: user });
      }
    });
  },

  // put ----------------------------------------------------------------------
  // updates a user
  put: function (req, res) {
    User.findOne({
      _id: req.params.id
    }, function (err, user) {
      if ( err ) {
        res.send( err );
      } else {
        user.name.first = req.body.first_name;
        user.name.last = req.body.last_name;
        user.email = req.body.email;
        user.phone = req.body.phone;
        user.save( function( err ) {
          if ( err ) {
            res.send( err );
          } else {
            res.redirect( '/users/user/' + user._id );
          }
        });
      }
    })
  },

  // destroy ------------------------------------------------------------------
  destroy: function (req, res) {
    User.find({ _id: req.params.id }).remove( function () {
      console.log('successfully removed user');
      res.redirect( '/users/' );
    });
  }

}
