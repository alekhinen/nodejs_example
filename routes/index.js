var express = require('express');
var router = express.Router();

// reroute index to users list page (for now)
router.get('/', function( req, res ) {
  res.redirect( '/users/' );
});

module.exports = router;
