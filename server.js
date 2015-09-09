// requiring/loading all of our dependencies/libaries
//.ENV
require('dotenv').load();
var express         = require('express');
var app             = express();// define our app using express
var bodyParser      = require('body-parser');
var logger          = require('morgan');
var mongoose        = require('mongoose');
var path            = require('path');
var favicon         = require('serve-favicon');
var cookieParser    = require('cookie-parser');
var jwt             = require('jsonwebtoken');
//OAUTH
// var FacebookStrategy = require('passport-facebook').Strategy 
// var TwitterStrategy  = require('passport-twitter').Strategy;
// var GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy;
// API Access link for creating client ID and secret:
// https://code.google.com/apis/console/
///////////////////

//////////////////
///loading routes defined in the /routes folder

var routes          = require('./routes/index');
var passport        = require('passport');
var LocalStrategy   = require('passport-local').Strategy;

//////////////////
///Oauth
/////////////////
var Facebook = require('./config/facebook');
var Twitter  = require('./config/twitter');
var Google   = require('./config/google');
//super secret token
// var superSecret = 'project4';

// check that MongoD is running...
require('net').connect(27017, 'localhost').on('error', function() {
  console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
  process.exit(0);
});

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

/// from page 58 // configure our app to handle CORS requests
// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  
//   next();

// });

// insert middleware that points to our route definitions
/////////////////////////////////
////Twitter Config Strategy//////
// passport.use(new TwitterStrategy({
//     consumerKey: process.env.TWITTER_KEY,
//     consumerSecret: process.env.TWITTER_SECRET,
//     callbackURL: "http://127.0.0.1:3000/oauth/twitter"
//   },

//   function (token, tokenSecret, profile, cb) {

//     return cb(null, profile);
  
//   }));

/////////////////////////////////
////GOOGLE Config Strategy/////
// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: 'http://127.0.0.1:3000/oauth/google'
// },

// function(accessToken, refreshToken, profile, done) {
//     // asynchronous verification, for effect...
//     process.nextTick(function () {
      
//       return done(null, profile);
    
//     });
  
//   }

// ));
/////////////////////////////////
////FACEBOOK Config Strategy/////
// passport.use(new FacebookStrategy({
//     clientID: process.env.FACEBOOK_APP_ID,
//     clientSecret: process.env.FACEBOOK_APP_SECRET,
//     callbackURL: "http://localhost:3000/auth/facebook/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     // asynchronous verification, for effect...
//     process.nextTick(function () {
      
//       // To keep the example simple, the user's Facebook profile is returned to
//       // represent the logged-in user.  In a typical application, you would want
//       // to associate the Facebook account with a user record in your database,
//       // and return that user instead.
//       return done(null, profile);
//     });
//   }
// ));


// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


// // loading routes defined in the /routes folder
// var routes = require('./routes/index');

//////////////////////
///SOURCE IN MODELS///
//////////////////////
var User  = require('./models/User');


// set up our one route to the login.html file
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/login.html'));
});

// DEFINED ROUTES ARE IN HERE >> routes, ie './routes/index'
app.use('/', routes);

////////////////////
////PASSPORT CONFIG
//////////////////////--
// var User = require('./models/User');
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


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