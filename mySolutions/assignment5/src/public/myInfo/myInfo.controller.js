(function () {
"use strict";

angular.module('public')
.controller('myInfoController', myInfoController);

myInfoController.$inject = ['signUpService'];

function myInfoController(signUpService) {
  var $ctrl = this;





  $ctrl.myInfo = signUpService.getMyInfo();

  if ($ctrl.myInfo.firstName == undefined) {
    $ctrl.signedUp = true;
    $ctrl.signedNot = false;
  }
  else {
      $ctrl.signedUp = false;
      $ctrl.signedNot = true;
  }
}


})();
