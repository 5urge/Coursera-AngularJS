(function () {

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['items'];
function CategoriesListController (items) {
	var categories = this;
	categories.items = items;
}

})();