(function () {

angular.module('MenuApp')
.component('itemsList', {
	templateUrl: 'src/templates/itemsList.template.html',
	bindings: {
		items: '<'
	}
}); 


})();