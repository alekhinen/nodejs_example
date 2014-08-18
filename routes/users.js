var express = require('express');
var router  = express.Router();
var API     = require('../app/controllers/user.js');

// GET /users/ ----------------------------------------------------------------
router.get( '/', API.list );

// GET /users/user/:id --------------------------------------------------------
router.get( '/user/:id', API.show );

// GET /users/new -------------------------------------------------------------
router.get( '/new', function( req, res ) {
  res.render( 'users/new', { title: 'New User' });
});

// POST /users/new ------------------------------------------------------------
router.post( '/new', API.post );

// export ---------------------------------------------------------------------
module.exports = router;
