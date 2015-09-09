(function() {
  'use strict';

  angular.module( 'myApp')
    .controller('LoginController', LoginController);

    function LoginController(){
      var vm = this;

      vm.login = function(){
        console.log(vm.email, vm.password);
      };
    }



  })();