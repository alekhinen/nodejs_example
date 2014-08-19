var express = require('express');
var router  = express.Router();
var API     = require('../app/controllers/user.js');

// GET /users/ ----------------------------------------------------------------
router.get( '/', API.list );

// GET /users/user/:id/edit ---------------------------------------------------
router.get( '/user/:id/edit', API.edit );

// POST /users/user/:id/delete ------------------------------------------------
// TODO: should this be a POST or a GET?
router.get( '/user/:id/delete', API.destroy );

// POST /users/:id/update -----------------------------------------------------
router.post ( '/user/:id/update', API.put );

// GET /users/user/:id --------------------------------------------------------
router.get( '/user/:id', API.show );

// GET /users/new -------------------------------------------------------------
router.get( '/new', API.new );

// POST /users/new ------------------------------------------------------------
router.post( '/new', API.post );

// export ---------------------------------------------------------------------
module.exports = router;
