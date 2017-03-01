(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItems();

  toBuy.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
    
    if (toBuy.items.length == 0) {
      toBuy.errorMessage = "Everything is bought!";
      };
  };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getItems2();
}

function ShoppingListCheckOffService () {
  var service = this;

  var toBuyB = [
  {
    name:"cookies", 
    quantity: 10
  }, 
  {
    name:"water bottles", 
    quantity: 5
  }, 
  {   
    name:"chocolate bars", 
    quantity: 3, 
  },
  {
    name:"pizza", 
    quantity: 1
  }, 
  {
    name:"dips", 
    quantity: 3
  }];

var bought = [];

 service.boughtItem = function (itemIndex) {
    bought.push(toBuyB[itemIndex]);
    toBuyB.splice(itemIndex, 1);
    function poop () {
      console.log("rq");
    };
  }

  service.getItems = function () {
    return toBuyB;
  };

  service.getItems2 = function () {
    return bought;
  };
  
};

})();
