var express = require('express');
var router  = express.Router();
var API     = require('../app/controllers/user.js');

// GET /users/ ----------------------------------------------------------------
router.get( '/', API.list );

// GET /users/user/:id --------------------------------------------------------
router.get( '/user/:id(\\d+)', API.show );

// GET /users/user/new --------------------------------------------------------
router.get( '/user/new', function( req, res ) {
  console.log( 'yoooo' );
  res.render( 'users/new', { title: 'New User' });
});

// POST /users/user/new -------------------------------------------------------
router.post( '/user/new', API.post );

// export ---------------------------------------------------------------------
module.exports = router;
