(function () {

angular.module('MenuApp')
.component('categoriesList', {
	templateUrl: 'src/templates/categoriesList.template.html',
	bindings: {
		items: '<'
	}
}); 


})();