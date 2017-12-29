'use strict';
var streamApp = angular.module('streamApp');
streamApp.controller('MainController',['$scope', MainController]);

function MainController ($scope) {
    // create a message to display in our view
    $scope.home = "Welcome Home!";
}
