var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/application-title');

var Resource = require('./models/Resource');

// callback-style
Resource.remove({}, function(err) {
  if (err) console.log(err);
  console.log("All resources removed...");
});

var newResources = [
  {name: 'Resource A'},
  {name: 'Resource B'}
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
