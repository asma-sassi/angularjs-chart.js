'use strict';
// create the module named streamapp and include ngRoute for routing needs
var streamApp = angular.module('streamApp',['ngRoute']);

//configure app's routes
streamApp.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    $routeProvider
    //route for the home page
        .when('/home', {
            templateUrl : 'views/partials/home.html',
            controller  : 'MainController'
        })
        //route for the about page
        .when('/about', {
            templateUrl : 'views/partials/about.html',
            controller  : 'AboutController'
        })
        //route for the contact page
        .when('/contact', {
            templateUrl : 'views/partials/contact.html',
            controller  : 'ContactController'
        })
        .otherwise({
            redirectTo: '/home'
        });
    // change the default hash-prefix from '!' to empty string '' cause I'm using angularjs 1.6
    $locationProvider.hashPrefix('');
}]);
// create the controller and inject Angular's $scope
streamApp.controller("MainController", function ($scope) {
    // create a message to display in our view
    $scope.home = "Welcome Home!";
});
streamApp.controller("AboutController", function ($scope) {
    $scope.about="Wanna hear about us! Here you are :)";
});
streamApp.controller("ContactController", function ($scope) {
    $scope.contact="Don't be shy to contact us!";
});
