require('dotenv').load();

var passport         = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;


  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  
  function (accessToken, refreshToken, profile, done) {
    //  done(null);//other example
    //}));//other example

    // process.nextTick(function () {
      
      // To keep the example simple, the user's Facebook profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Facebook account with a user record in your database,
      // and return that user instead.
      done(null, profile);
 }));

module.exports = passport;
