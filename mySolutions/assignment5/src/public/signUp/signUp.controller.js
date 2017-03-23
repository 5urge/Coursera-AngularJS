(function () {
"use strict";

angular.module('public')
.controller('signUpCtrl', signUpCtrl);

signUpCtrl.$inject = ['signUpService'];
function signUpCtrl(signUpService) {
  var $ctrl = this;
  var description = "";

$ctrl.submit = function() {

  var promise = signUpService.getMenuItem($ctrl.user.menuNumber.toUpperCase());

  promise.then(function (response) {
    signUpService.signedUp
    ($ctrl.user.firstName, $ctrl.user.lastName, $ctrl.user.email, $ctrl.user.phone,response.data.short_name, response.data.description, response.data.category_short_name);
    $ctrl.completed = true;
    $ctrl.message = "";
  }).catch(function(error) {
    $ctrl.message = "No such menu number exists. Pick another one!";
  });
  };

}


})();
