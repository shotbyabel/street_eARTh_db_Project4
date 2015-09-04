var Resource = require('../models/Resource');

var index = function(req, res, next) {
  Resource.find({}, function (err, resources) {
    if (err) res.send(err);

    res.render('resources/index', {resources: resources});
  });
};

var show = function(req, res, next) {
  Resource.findById(req.params.id, function(err, resource) {
    if (err) res.send(err);

    res.render('resources/show', {resource: resource});
  });
};

// 'new' is a keyword in JS, so we can't use it for a variable!
var newRoute = function(req, res, next) {
  res.render('resources/new');
};

var create = function(req, res, next) {
  Resource.create(req.body.resource, function (err, resource) {
    if (err) res.send(err);

    res.redirect('/resources/' + resource.id);
  });
};

module.exports = {
  index:  index,
  show:   show,
  new:    newRoute,
  create: create
};
