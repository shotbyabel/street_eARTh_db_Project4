// import Express and the Express Router
var express   = require('express'), 
    bodyParser   = require('body-parser'),
    router    = express.Router(),
    User      = require('../models/User'),//require user MODEL
    port      = process.env.PORT || 8080;

    // passport middleware
    passport  = require('passport');

// import controllers for resources
 var SessionsController = require('../controllers/sessions');

// define routes for our application, and send them to route handlers
// router.get('/', welcomeController.index);
   router.get('/', function (req, res) {
    res.render('index', {user: req.user});

    });
 //////////////////////// 
//ROUTES FOR OUR API////
///////////////////////
//basic route for home page
var app = express();

app.get('/', function (req, res) {
    res.send('street earth db API');

  });

//get an instalce of the express router
var apiRouter = express.Router();
//middleware to use for all request
apiRouter.use (function (req, res, next) {
  //do loggin
  console.log('visitor came to the street earth db!');
  //authenticate users later
  next(); //

});
//test route to make sure everying is working
///accessed at GET http://localhost: /api
apiRouter.get('/', function (req, res) {
    res.json({message: 'dope! welcome to my api'});

  });
///more API ROUTES COMING SOON!////
apiRouter.route('/users')
  //// create a user (accessed at POST http://localhost:8080/api/users)
  .post (function (req, res) {
    var user = new User();//create new instance of User model
    //set the users info (comes fr. req.)
    
    user.name     = req.body.name;
    user.username = req.body.username;
    user.password = req.body.password;
    ///user SAVE and chek for err
    user.save (function(err) {
      if (err) {
        //duplicate entry
        if (err.code == 1100)
          return res.json({ success: false, message: 'A user with that\
username already exists. '});
        else 
          return res.send(err);  

      }

            res.json({ message: 'User created!'});


        });
    })

///REGISTER OUR ROUTES----------------------
//all of our routes will be prefixed with /api
app.use('/api', apiRouter);

// START THE SERVER
//==================
app.listen(port);
console.log('things seem to be workingon the api port ' + port);




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
