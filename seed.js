var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/streetEarth');

var User    = require('./models/User');
var ArtWork = require('./models/Artwork');

// callback-style
Resource.remove({}, function(err) {
  if (err) console.log(err);
  console.log("All resources removed...");
});

var newArtwork = [
  
  {

    photo_uri: "http://i.imgur.com/bsqK0Fz.png",
    country: "USA",
    city: "Los Angeles",
    area: "Arts District",
    landmark: "The Container yard",
    human: "false"
    animals: "true"
    graffiti: "false"
    scripts: "false"
    abstract: "false"
    stencils_posters: "false"
    artist_id: "Binho"
    user_id:""
  },

];





// promise-style
Resource
  .create(newResources)
  .then(
    function(resources) {
      console.log(resources.length + " resources seeded.");
    }, function(err) {
      console.log(err);
  })
  .then(function() {
    mongoose.disconnect();
  });
