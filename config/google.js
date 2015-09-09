require('dotenv').load();

var passport         = require('passport'),
    GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy;


    passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://127.0.0.1:3000/oauth/google'
  },

  function (token, tokenSecret, profile, done) {//double check callbacks

    return done(null, profile);
  
  }));

    module.exports = passport;