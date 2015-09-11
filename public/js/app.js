
(function() {
  'use strict';

angular.module( 'myApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('/home', {
        url:          '/home',
        templateUrl:  'templates/home.html'
      })

     .state('/login', {
        url:          '/login',
        templateUrl:  'templates/login.html',
        controller:   'LoginController',
        controllerAs: 'vm'

      })

     .state('/about', {
        url:          '/about',
        templateUrl:  'templates/about.html',
        controller:   'AboutController',
        controllerAs: 'vm'
        
      })

     .state('/contact', {
        url:          '/contact',
        templateUrl:  'templates/contact.html',
        controller:   'ContractController',
        controllerAs: 'vm'

       }) 

     .state('/signup', {
        url:          '/signup',
        templateUrl:  'templates/signup.html',
        controller:   'SignupController',
        controllerAs: 'vm'

       }) 

      .state('/artworks', {
        url:          '/artworks',
        templateUrl:  'templates/artworks.html',
        controller:   'ArtworksController',
        controllerAs: 'vm'

       }); 


      $urlRouterProvider.otherwise('/home'); 


  }]);


})();
