(function() {
  'use strict';

  angular.module( 'myApp')
    .controller('SignupController', SignupController);

    function SignupController(){
      var vm = this;

      vm.contact = function(){
        console.log();
      };
    }



  })();