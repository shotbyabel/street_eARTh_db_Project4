// import Express and the Express Router
var express = require('express');
var router = express.Router();

// import controllers for resources
var welcomeController = require('../controllers/welcome');

// define routes for our application, and send them to route handlers
router.get('/', welcomeController.index);

// router.get(    '/resources',          resourcesController.index)
// router.get(    '/resources/new',      resourcesController.new)
// router.get(    '/resources/:id',      resourcesController.show)
// router.get(    '/resources/:id/edit', resourcesController.edit)
// router.post(   '/resources',          resourcesController.create)
// router.put(    '/resources/:id',      resourcesController.update)
// router.delete( '/resources/:id',      resourcesController.destroy)

module.exports = router;
