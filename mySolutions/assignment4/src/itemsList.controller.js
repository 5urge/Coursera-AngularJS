(function () {

angular.module('MenuApp')
.controller('itemsListController', itemsListController);


itemsListController.$inject = ['item'];
function itemsListController (item) {
	var itemCtrl = this;
	itemCtrl.itemItems = item;
}

})();
