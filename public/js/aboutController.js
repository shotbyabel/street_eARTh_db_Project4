(function() {
  'use strict';

  angular.module( 'myApp')
    .controller('AboutController', AboutController);

    function AboutController(){
      var vm = this;

      vm.about = function(){
        console.log();
      };
    }



  })();