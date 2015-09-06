var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    bcrypt   = require('bcryptjs');

///REQ Artwork MODEL///
var artWork  = require('./Artwork');
//user schema
var UserSchema  = new Schema({
    name: String,
    email: String,
    artWorks: [{
              type: mongoose.Schema.Types.ObjectId,
              ref: 'artWork'
      }], 
    
    username: { type: String, require: true, index: {unique: true }}, 
    password: { type: String, require: true, select: false }

});

// hash the psw before user is saved
UserSchema.pre('save', function (next) {
  var user = this;
//hash psw only if the psw has been changed or user is new
  if (!user.isModified('password')) return next();
//generate the hash
bcrypt.hash(user.password, null, null, function (err, hash) {
  if (err) return next (err);
  //changed the password to the hashed version
  user.password = hash;
  next();
  });

});

//method to compare a given password with the databse hash
UserSchema.methods.comparePassword = function (password) {
  var user = this;

  return bcrypt.compareSync (password, user.password);

};


//return the model
module.exports = mongoose.model('User', UserSchema);



    