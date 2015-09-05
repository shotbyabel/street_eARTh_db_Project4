// import Express and the Express Router
var express   = require('express'),
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
 ///////////////////////////////  
//page 59 ROUTES FOR OUR API////
///////////////////////////////
//basic route for home page
var app = express();

app.get('/', function (req, res) {
    res.send('street earth db API');

  });

//get an instalce of the express router
var apiRouter = express.Router();

//test route to make sure everying is working
///accessed at GET http://localhost: /api
apiRouter.get('/', function (req, res) {
    res.json({message: 'dope! welcome to my api'});

  });
///more API ROUTES COMING SOON!////

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
