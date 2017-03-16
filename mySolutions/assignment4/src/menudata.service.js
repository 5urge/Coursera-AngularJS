(function () {

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService ($http) {
	var service = this;

	service.getAllCategories = function() {
		return $http({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/categories.json"
					}).then(function(response) {
						var allCategories = [];
						var allCategories = response.data;
						return allCategories;

						});// end of .then
	};//end of get all Categories

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

} //end of service


})();