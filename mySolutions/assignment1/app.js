(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
	

	function LunchCheckController ($scope) {
		$scope.name = ""

		$scope.LunchCheck = function () {
			if ($scope.name == "") {
				$scope.message = "Please enter data first";
			}
			else {
				var itemsAte = $scope.name.split(",");
				if (itemsAte.length < 4) {
					$scope.message = "Enjoy!";
				}
				else {
					$scope.message = "Too much!";
					console.log(itemsAte);
				};
			}
	};

};
})();
