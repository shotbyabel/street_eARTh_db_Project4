require('dotenv').load();

var passport        = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy;


  passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: "http://127.0.0.1:3000/oauth/twitter"//shoulds this be different?
  },

  function (token, tokenSecret, profile, done) {//double check callbacks

    return done(null, profile);
  
  }));

  module.exports = passport;