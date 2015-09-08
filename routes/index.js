// import Express and the Express Router
var express       = require('express'), 
    bodyParser    = require('body-parser'),
    router        = express.Router(),
    User          = require('../models/User'),//require user MODEL
    port          = process.env.PORT || 8080,
    passport      = require('passport');

// import controllers for resources
 var SessionsController = require('../controllers/sessions');

// define routes for our application, and send them to route handlers
// router.get('/', welcomeController.index);
   // router.get('/', function (req, res) {
   //  res.render('index', {user: req.user});

   //  });
 /////////////////////////////////////////////////// 
////ROUTES FOR OUR USERS API///NOT USING///////////
///////////////////////////////////////////////////
//basic route for home page
var app = express();

app.get('/', function (req, res) {
    res.send('street earth db API');

  });

////twitter auth route
app.get('/oauth/twitter', function (req, res) {
  res.send('Hello World');

});

//get an instance of the express router
var apiRouter = express.Router();

// // route for authenticating users
// // route to authenticate a user (POST http://localhost:8080/api/authenticate)
//   apiRouter.post('/authenticate', function (req, res) {
//   //find the user
//   //selec the name user name and password only
//   User.findOne({
//   username: req.body.username
//  }).select('name username password').exec(function (err, user) {

//     if (err) throw err;

//     // nop user w that username was found
//     if (!user) {
//       res.json({
//         success: false,
//         message: 'Authentication failed. User not found.' 
//       });
//     } else if (user) {

//    //check if password matches
//    var validPassword = user.comparePassword(req, body.password);
//     if (!validPassword) {
//       res.json({
//         success: false,
//         message: 'Authenticate failed. Wrong password.'
//       });
//     } else {

//       // if user is found and password is right
//       //create a token
//     var token = jwt.sign({
//       name: user.name,
//       username: user.username
//      }, superSecret, {
//       expiresInMinutes: 1440 // expires in 24 hour
//      });
//      //return the info including token as JSON
//      res.json({
//       success: true,
//       message: 'Enjoy your token!',
//       token: token
        

//         });
//       }   

//     }

//   });
// });

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
///REGISTER OUR ROUTES----------------------
//all of our routes will be prefixed with /api
app.use('/api', apiRouter);
// START THE SERVER
//==================
app.listen(port);
console.log('Magic seem to be happening on the api port ' + port);
// ///more API ROUTES COMING SOON!////
// apiRouter.route('/users')//NOT WORKING!!!//
//   //// create a user (accessed at POST http://localhost:8080/api/users)
//   .post (function (req, res) {
//     var user = new User();//create new instance of User model
//     //set the users info (comes fr. req.)
//     user.name     = req.body.name;
//     user.username = req.body.username;
//     user.password = req.body.password;
//     ///user SAVE and chek for err
//     user.save (function(err) {
//       if (err) {
//         //duplicate entry
//         if (err.code == 1100)
//           return res.json({ success: false, message: 'A user with that username already exists. '});
//         else 
//           return res.send(err);  

//       }

//             res.json({ message: 'User created!'});


//         });
//     })

   //get all the users (accessed at GET http://localhost:8080/api/users)
   // .get(function(req, res) {

   //   User.find(function (err, users) {
   //     if (err) res.send(err);

   //     // return the users
   //     res.json(users);
   //   });
   // });
// on routes that end in /users/:user_id

  apiRouter.route('/users/:user_id') ///NOT WORKING
  // get the user with that id
// (accessed at GET http://localhost:8080/api/users/:user_id) 
  .get(function (req, res) {
    User.findById(req.params.user_id, function (err, user) { 
      if (err) res.send(err);
    
    }); 

  })

// update the user with this id
  // .put(function (req, res) {
  //   User.findById(req.params.user_id, function (err, user) {

  //     if (err) return res.send(err);

  //     // set the new user information if it exists in the request
  //     if (req.body.name) user.name = req.body.name;
  //     if (req.body.username) user.username = req.body.username;
  //     if (req.body.password) user.password = req.body.password;

  //     // save the user
  //     user.save(function(err) {
  //       if (err) return res.send(err);

  //       // return a message
  //       res.json({ message: 'User updated!' });
  //     });

  //    });
  
  // })

    // delete the user with this id
      .delete(function (req, res) {
        User.remove({
        _id: req.params.user_id
      }, function (err, user) {
        if (err) return res.send(err);

        res.json({ message: 'Successfully deleted' });
    
      });
  
    });

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
