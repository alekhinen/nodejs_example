var express = require('express');
var router  = express.Router();
var userApi = require('../app/controllers/user.js');

// GET /users/ ----------------------------------------------------------------
router.get( '/', function( req, res ) {
  res.send('hitting the users list page');
});

// GET /users/user/:id --------------------------------------------------------
router.get( '/user/:id', function( req, res ) {
  res.send('displaying a single user');
});

// POST /users/user/new -------------------------------------------------------
router.post( '/user/new', function( req, res ) {
  res.send('posting a new user to the db');
});

module.exports = router;
