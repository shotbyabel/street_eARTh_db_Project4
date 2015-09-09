
(function() {
  'use strict';

angular.module( 'myApp',['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url:          '/home',
        templateUrl:  'templates/home.html'
      })
     .state('login', {
        url:          '/login',
        templateUrl:  'templates/login.html',
        controller:   'LoginController',
        controllerAs: 'vm'
      });

      $urlRouterProvider.otherwise('/home'); 


  }]);


})();
