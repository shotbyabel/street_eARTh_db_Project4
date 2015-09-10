(function() {
  'use strict';

  angular.module( 'myApp')
    .controller('ContactController', ContactController);

    function ContactController(){
      var vm = this;

      vm.contact = function(){
        console.log();
      };
    }



  })();