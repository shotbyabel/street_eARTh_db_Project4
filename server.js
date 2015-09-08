// requiring/loading all of our dependencies/libaries
var express      = require('express');
var app          = express();// define our app using express
var bodyParser   = require('body-parser');
var logger       = require('morgan');
var mongoose     = require('mongoose');
var path         = require('path');
var favicon      = require('serve-favicon');
var cookieParser = require('cookie-parser');
var passport     = require('passport');
var jwt          = require('jsonwebtoken');
require('dotenv').load();

//super secret token
var superSecret = 'project4';

// check that MongoD is running...
require('net').connect(27017, 'localhost').on('error', function() {
  console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
  process.exit(0);
});
// loading routes defined in the /routes folder
var routes = require('./routes/index');
// load mongoose and connect to a database
mongoose.connect('mongodb://localhost/streetEarth');
// start running express, and save the configurations for the express
// "app" with the variable `app`.
// var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set up our one route to the login.html file
app.get('*', function (req, res) {
res.sendFile(path.join(__dirname + '/public/login.html'));

  });

/// from page 58 // configure our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  
  next();

});

// insert middleware that points to our route definitions

//////////////////////
///SOURCE IN MODELS///
//////////////////////
var User  = require('./models/User');

// DEFINED ROUTES ARE IN HERE >> routes, ie './routes/index'
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;