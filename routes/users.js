var express = require('express');
var router  = express.Router();
var API     = require('../app/controllers/user.js');

// GET /users/ ----------------------------------------------------------------
router.get( '/', API.list );

// GET /users/user/:id --------------------------------------------------------
router.get( '/user/:id', API.show );

// POST /users/user/new -------------------------------------------------------
router.post( '/user/new', API.post );

// export ---------------------------------------------------------------------
module.exports = router;
