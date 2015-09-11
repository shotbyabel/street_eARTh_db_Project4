var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/streetEarth');

var User    = require('./models/User');
var Artwork = require('./models/Artwork');

// callback-style
Artwork.remove({}, function(err) {
  if (err) console.log(err);
  console.log("All artwork removed...");


var newArtwork = [
  
  {

    photo_uri: "http://i.imgur.com/bsqK0Fz.png",
    country: "USA",
    city: "Los Angeles",
    area: "Historic Filipino Town",
    landmark: "Gabba Gallery Alleys",
    artist: "BINHO", //hardcoded for now
    human: false,
    animals: true,
    graffiti: false,
    scripts: false,
    abstract: false,
    stencils_posters: false
    // artist_id: "Binho"
    // user_id:""
  },

  {

    photo_uri: "http://i.imgur.com/PRZMlu6.png",
    country: "USA",
    city: "Los Angeles",
    area: "Arts Disctrict",
    landmark: "",
    artist: "EL MAC", //hardcoded for now
    human: true,
    animals: false,
    graffiti: false,
    scripts: false,
    abstract: false,
    stencils_posters: false
    // artist_id: "Binho"
    // user_id:""
  },

   {

    photo_uri: "http://i.imgur.com/M5dvnVq.png",
    country: "USA",
    city: "New York",
    area: "Queens",
    landmark: "Wellington Courts",
    artist: "CERNESTO", //hardcoded for now
    human: true,
    animals: true,
    graffiti: false,
    scripts: false,
    abstract: false,
    stencils_posters: false
    // artist_id: "Binho"
    // user_id:""
  },

   {

    photo_uri: "http://i.imgur.com/cuUcQV6.png",
    country: "Germany",
    city: "Berlin",
    area: "Kreuzberg",
    landmark: "",
    artist: "Os Gemeos", //hardcoded for now
    human: true,
    animals: false,
    graffiti: false,
    scripts: false,
    abstract: false,
    stencils_posters: false
    // artist_id: "Binho"
    // user_id:""
  },

   {

    photo_uri: "http://i.imgur.com/hJOgNCD.png",
    country: "USA",
    city: "Los Angeles",
    area: "Silver Lake",
    landmark: "",
    artist: "Tristan Eaton", //hardcoded for now
    human: true,
    animals: false,
    graffiti: false,
    scripts: false,
    abstract: true,
    stencils_posters: false
    // artist_id: "Binho"
    // user_id:""
  },

{

    photo_uri: "http://i.imgur.com/DCUKx5p.png",
    country: "USA",
    city: "Los Angeles",
    area: "Art Disctrict",
    landmark: "The Container Yard",
    artist: "BINHO", //hardcoded for now
    human: false,
    animals: true,
    graffiti: false,
    scripts: false,
    abstract: false,
    stencils_posters: false
    // artist_id: "Binho"
    // user_id:""
  },



];






// promise-style
Artwork
  .create(newArtwork)
  .then(
    function(artwork) {
      console.log(artwork, "Above artwork seeded.");
    }, function(err) {
      console.log(err);
  })
  .then(function() {
    mongoose.disconnect();
  });

  });
