// import Express and the Express Router
  var express       = require('express'), 
      router        = express.Router(),
      bodyParser    = require('body-parser'),
      User          = require('../models/User'),//require user MODEL
      passport      = require('passport');
      //basic route for home page
      // app = express();

// import controllers for resources
  // var SessionsController = require('../controllers/sessions');

// define routes for our application, and send them to route handlers
  router.get('/', function (req, res) {
  res.render('index', {user: req.user});

    });
  router.get('/signup', function (req, res ) {
    res.render('signup')
  })

   router.get('/contribute', function (req, res ) {
    res.render('contribute')
  })
// //basic route for home page
//   var app = express();
///////////////////////////
////TWITTER AUTH ROUTE////
/////////////////////////
  router.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
  });

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
