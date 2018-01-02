'use strict';
// create the module named streamapp and include ngRoute for routing needs
var streamApp = angular.module('streamApp',['ngRoute','chart.js']);

// streamApp.config(['$qProvider', function ($qProvider) {
//     $qProvider.errorOnUnhandledRejections(false);
// }]);

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
