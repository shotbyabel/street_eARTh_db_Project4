var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var User        = require('./User');

////////
//Artwork Schema
/////////////////
var ArtworkSchema = new Schema({

  photo:    String, 
  country:  String,
  city:     String,
  area:     String,
  landmark: String,
  human:    Boolean,
  animals:  Boolean,
  graffiti: Boolean,
  scripts:  Boolean,
  abstract: Boolean,
  collab:   Boolean,
  patterns: Boolean,
  stencils_posters:Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  //how do i reference the location?
    }

  });

module.exports = mongoose.model('Artwork', ArtworkSchema);

