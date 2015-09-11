// import Express and the Express Router
  var express       = require('express'), 
      router        = express.Router(),
      bodyParser    = require('body-parser'),
      User          = require('../models/User'),//require user MODEL
      passport      = require('passport');
     
  

// define routes for our application, and send them to route handlers
  router.get('/', function (req, res) {
  res.render('index', {user: req.user});

    });
  //
  router.get('/signup', function (req, res ) {
    res.render('signup')
  })

   router.get('/contribute', function (req, res ) {
    res.render('contribute')
  })

   router.get('/users/show', function (req, res ) {
    res.render('users/show')
  })

   router.get('/search', function (req, res ) {
    res.render('search')
  })

   router.get('/gallery', function (req, res ) {
    res.render('gallery')
  })

   router.get('/about', function (req, res ) {
    res.render('about')
  })
//||||||||||||||||||||||||||||||||||||||||||||||||
//||||||USERS API ROUTES||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||

var Artwork = require('../models/Artwork')

  router.get('/artworks', function (req, res) {
    Artwork.find({}, function (err, artworks) {
      res.json(artworks)
    });
    

  })
// var apiRouter = express.Router();

// //middleware to use for all request
// apiRouter.use(function(req, res, next) {
//   console.log("somebody came to our API");

// //more middleware to be added later
// //this is where we will auth users.
// next();

// })

// apiRouter.get('/', function (req, res) {
//     res.json({ message: 'hooray! welcome to our api' });
// });




// //routes that end in /users

// apiRouter.route('/users')
// //basic route for home page
//   var app = express();
///////////////////////////
////TWITTER AUTH ROUTE////
/////////////////////////

  router.get('/login',
  function(req, res){
    res.render('login');
  });

  router.get('/login/twitter',
  passport.authenticate('twitter'));

  router.get('/login/twitter/return', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
// app.get('/profile',
//   require('connect-ensure-login').ensureLoggedIn(),
//   function(req, res){
//     res.render('profile', { user: req.user });
//   });
//////////////////////////////
/////FACEBOOK Oauth ROUTES////
//////////////////////////////
// Facebook routes
  router.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['email', 'user_birthday', 'user_location']}));

  router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/home', failureRedirect: '/login'}));

////////////////////////
///GOOGLE AUTH ROUTE////
////////////////////////
  router.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }),
    function(req, res){
    // The request will be redirected to Google for authentication, so this
    // function will not be called.
  
    });

  router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');

  });

  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');

  });


// START THE SERVER
//==================
// app.listen(port);
// console.log('' + port);

//*Render sessions controller
// router.get('/login', SessionsController.sessionsNew);
// router.post('/login', passport.authenticate, SessionsController.sessionsCreate);

// router.get(    '/resources',          resourcesController.index)
// router.get(    '/resources/new',      resourcesController.new)
// router.get(    '/resources/:id',      resourcesController.show)
// router.get(    '/resources/:id/edit', resourcesController.edit)
// router.post(   '/resources',          resourcesController.create)
// router.put(    '/resources/:id',      resourcesController.update)
// router.delete( '/resources/:id',      resourcesController.destroy)

module.exports = router;
