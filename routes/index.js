// import Express and the Express Router
var express   = require('express'),
    router    = express.Router(),
    User      = require('../models/User'),//require user MODEL
    // passport middleware
    passport  = require('passport');



// import controllers for resources
 var SessionsController = require('../controllers/sessions');

// define routes for our application, and send them to route handlers
// router.get('/', welcomeController.index);
   router.get('/', function (req, res) {
    res.render('index', {user: req.user});

    });

//render sessions controller

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
