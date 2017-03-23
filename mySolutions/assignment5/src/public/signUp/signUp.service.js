(function () {
"use strict";

angular.module('public')
.service('signUpService', signUpService);


signUpService.$inject = ['$http'];

function signUpService($http) {
  var service = this;
  var signedUpPerson = [];


  service.signedUp = function(first,last,email,phone, name, description, category) {
    signedUpPerson = {
      firstName: first,
      lastName: last,
      emailAddress: email,
      phoneNumber: phone,
      itemName: name,
      itemDescription: description,
      itemCategoryName: category
    }
  };

  service.getMenuItem = function (short_name) {
    return $http({
      method: "GET",
      url: 'https://gorby-course5.herokuapp.com/menu_items/'+short_name+'.json'})
        .then(function(response) {
          return response;
        })
  };


  service.getMyInfo = function () {
    return signedUpPerson;
  }
};

})();
