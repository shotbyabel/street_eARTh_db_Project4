// import Express and the Express Router
  var express       = require('express'), 
      router        = express.Router(),
      bodyParser    = require('body-parser'),
      User          = require('../models/User'),//require user MODEL
      passport      = require('passport');

// import controllers for resources
  var SessionsController = require('../controllers/sessions');

// define routes for our application, and send them to route handlers
  router.get('/', function (req, res) {
  res.render('index', {user: req.user});

    });
//basic route for home page
  var app = express();
///////////////////////////
////TWITTER AUTH ROUTE////
/////////////////////////
  app.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
  });

  app.get('/login',
  function(req, res){
    res.render('login');
  });

  app.get('/login/twitter',
  passport.authenticate('twitter'));

  app.get('/login/twitter/return', 
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
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }),
    function(req, res){
    // The request will be redirected to Google for authentication, so this
    // function will not be called.
  
    });

  app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');

  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');

  });


// START THE SERVER
//==================
// app.listen(port);
// console.log('' + port);

//*Render sessions controller
router.get('/login', SessionsController.sessionsNew);
router.post('/login', passport.authenticate, SessionsController.sessionsCreate);

// router.get(    '/resources',          resourcesController.index)
// router.get(    '/resources/new',      resourcesController.new)
// router.get(    '/resources/:id',      resourcesController.show)
// router.get(    '/resources/:id/edit', resourcesController.edit)
// router.post(   '/resources',          resourcesController.create)
// router.put(    '/resources/:id',      resourcesController.update)
// router.delete( '/resources/:id',      resourcesController.destroy)

module.exports = router;
