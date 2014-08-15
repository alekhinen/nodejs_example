var express      = require('express');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var hbs          = require('express-hbs');
var mongoose     = require('mongoose');
var app          = express();

// ----------------------------------------------------------------------------
// base setup (static assets, parser, db connection) --------------------------

mongoose.connect('mongodb://localhost/example_db');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ----------------------------------------------------------------------------
// routes ---------------------------------------------------------------------

var routes = require('./routes/index');
var users  = require('./routes/users');

app.use('/', routes);
app.use('/users', users);

// ----------------------------------------------------------------------------
// views ----------------------------------------------------------------------

// view engine setup
app.engine( 'hbs', hbs.express3({
  defaultLayout: 'views/layout',
  partialsDir: [
    __dirname + '/views/shared',
    __dirname + '/views/templates'
  ]
}));
app.set( 'view engine', 'hbs' );
app.set( 'views', path.join(__dirname, 'views') );

// ----------------------------------------------------------------------------
// error handlers -------------------------------------------------------------

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler - will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
} else {
  // production error handler - no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}


module.exports = app;
