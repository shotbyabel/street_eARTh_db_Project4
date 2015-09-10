  var express       = require('express'),
      app           = express(),// define our app using express 
      router        = express.Router(),
      bodyParser    = require('body-parser'),
      User          = require('../models/User'),//require user MODEL
      passport      = require('passport');
      // port          = process.env.PORT || 3000;

     
//||||||USERS API ROUTES||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||     

// basic route for the home page
app.get('/', function(req, res) {
res.send('Welcome to the home page!');

 });

var apiRouter = express.Router();

 // test route to make sure everything is working
 // accessed at GET http://localhost:8080/api
 apiRouter.get('/', function(req, res) {
 res.json({ message: 'hooray! welcome to our api!' });

 });

// more routes for our API will happen here

 // REGISTER OUR ROUTES -------------------------------
  // all of our routes will be prefixed with /api
  app.use('/api', apiRouter);
  // START THE SERVER
  // ===============================
  ///DO I NEED TO DEFINE PORT?????
  // app.listen(port);
  // console.log('Magic happens on port ' + port);



  