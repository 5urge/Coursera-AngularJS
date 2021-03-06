(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    template: '{{ item.name }}, {{ item.short_name }}, {{ item.description }}',
    // scope: {
    //   found: '<' //will show up in the html doc as founds.items
    // },
    // controller: FoundItemsDirectiveController,
    // controllerAs: 'founds',
    // bindToController: true
  };

  return ddo;
}

// function FoundItemsDirectiveController() {
//   var list = this;

//   list.cookiesInList = function () {
//     for (var i = 0; i < list.items.length; i++) {
//       var name = list.items[i].name;
//       if (name.toLowerCase().indexOf("cookie") !== -1) {
//         return true;
//       }
//     }

//     return false;
//   };
// }

NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {

  var menu = this;

  menu.searchTerm = "";


  menu.found = function () {
    var promise = MenuSearchService.getItemsForCategory(menu.searchTerm);
    promise.then(function(result) {
        //console.log(result);
        menu.MatchedItems = result;
        console.log(menu.MatchedItems);
        if (menu.MatchedItems.length == 0){
              menu.message = "Nothing Found";
              console.log(menu.message);
            }
          else{
              menu.message = "";
              }

            menu.MatchedItems = result
            
    });  
  };

  menu.removeItem = function (itemIndex) {
    console.log(menu.MatchedItems[itemIndex]);
    menu.MatchedItems.splice(itemIndex, 1);

  };


}

MenuSearchService.$inject =['$http'];
function MenuSearchService ($http) {
  var service = this;


  service.getItemsForCategory = function(categoryShortName) {
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
          }).then(function (response) {
            var foundItems = [];
            var allItems = response.data.menu_items;
            var length = allItems.length;

            for(var i = 0; i < length; i++) {
              var item = allItems[i];
              if (item.short_name.indexOf(categoryShortName) != -1) {
                foundItems.push(item);
              }
            }
            return foundItems;
            });// end of .then
            
  };//end of getItemsForCategory



}//end of service

})();
