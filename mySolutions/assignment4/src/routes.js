(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function  RoutesConfig($stateProvider, $urlRouterProvider) {
  //direct to default view
  $urlRouterProvider.otherwise('/');


  //UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html' //change to templateUrl later
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.template.html',
      controller: 'CategoriesListController as categories',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{itemShortName}',
      templateUrl: 'src/templates/items.template.html',
      controller: 'itemsListController as itemCtrl',
      resolve: {
          item: [ '$stateParams','MenuDataService', 
                function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.itemShortName);
       }]
     }
    });
}

})();