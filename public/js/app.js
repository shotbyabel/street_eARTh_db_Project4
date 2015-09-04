'use strict';
(function() {


angular
.module('myApp', ['ui.router'])
.config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('appLogin', {              // name
        url:          '/login',         // URL (after the '#')
        templateUrl:   'login.html',    // template
        controller:    '',               // controller
        controllerAs:  ''               // name of controller in template


      });
    $urlRouterProvider.otherwise('/');  //default state
  } 


})();
