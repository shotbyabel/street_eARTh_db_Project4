var express   = require('express'),
    passport  = require('passport'),
    User      = require('../models/User'),
    router    = express.Router();

    ///*GET '/login'

    function sessionsNew  (req, res) {
      res.render('/login', {user : req.user});
    

    };

    ///*POST log in w/o session create

    function sessionsCreate (req, res, next) {
    req.session.save(function (err) {
      if (err) return next(err);
      res.redirect('/users/' + req.user.id);
    
    });
  
  };

    ///*GET '/logout'

    function sessionsDelete  (req, res) {
    // req.logout();
    // res.redirect('/');
    req.session.destroy(function(err){
      res.redirect('/');
      
      })
    
    };
 

    ///*module.exports

    module.exports = {
      
      sessionsNew:     sessionsNew,
      sessionsCreate:  sessionsCreate,
      sessionsDelete:  sessionsDelete
    
    };
