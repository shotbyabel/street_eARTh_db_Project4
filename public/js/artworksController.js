(function() {
  'use strict';

  angular.module( 'myApp')
    .controller('ArtworksController', ArtworksController);


  ArtworksController.$inject = ['$http'];

    function ArtworksController($http) {
      var vm = this;

      vm.artworks = {};

      $http.get('/artworks').then(function(res) {
        vm.artworks = res.data;
      });
    }

  
  })();